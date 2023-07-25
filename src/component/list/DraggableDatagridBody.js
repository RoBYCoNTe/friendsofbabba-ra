import * as React from 'react';
import {
  cloneElement,
  memo,
} from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  DatagridBody as RaDatagridBody,
  DatagridClasses,
  PureDatagridRow,
  useDataProvider,
  useListContext,
  useResourceContext,
} from 'react-admin';

import {
  DragDropContext,
  Draggable,
  Droppable,
} from '@hello-pangea/dnd';
import { TableBody } from '@mui/material';

import { DraggableProvider } from '../../context/DraggableContext';

const DraggableDatagridBody = ({
	children,
	className,
	data,
	expand,
	hasBulkActions,
	hover,
	onToggleItem,
	resource,
	row,
	rowClick,
	rowStyle,
	selectedIds,
	isRowSelectable,
	draggableField,
	...rest
}) => {
	const { refetch } = useListContext();
	const dataProvider = useDataProvider();
	const droppableResource = useResourceContext(resource);
	const [localData, setLocalData] = React.useState(data);
	const onDragEnd = async (result) => {
		if (!result.destination) {
			return;
		}

		let list = localData;
		// Find the item in the list
		let itemIndex = list.findIndex(
			(el) => el.id === parseInt(result?.draggableId)
		);

		if (itemIndex === -1) {
			return;
		}

		let currentPosition = result?.source?.index;
		let newPosition = result?.destination?.index;

		// If the new position is greater than the current position
		if (newPosition > currentPosition) {
			// Update the order_index of the items that will come after the moved item
			for (let i = currentPosition; i < newPosition; i++) {
				list[i].order_index -= 1;
			}
		}
		// If the new position is less than the current position
		else if (newPosition < currentPosition) {
			// Update the order_index of the items that will come before the moved item
			for (let i = newPosition - 1; i < currentPosition - 1; i++) {
				list[i].order_index += 1;
			}
		}

		// Move the item to the new position
		list[itemIndex].order_index = newPosition;

		// Sort the list by the order_index
		list.sort((a, b) => a.order_index - b.order_index);

		setLocalData(list);

		const {
			data: { success }
		} = await dataProvider.post(`${droppableResource}/order`, {
			id: result?.draggableId,
			source: result?.source?.index,
			destination: result?.destination?.index
		});

		if (success) {
			refetch();
		}
	};

	React.useEffect(() => {
		setLocalData(data);
	}, [data]);

	return (
		<DragDropContext onDragEnd={onDragEnd} enableDefaultSensors={true}>
			<Droppable droppableId={droppableResource} direction="vertical">
				{(droppableProvided) => {
					return (
						<TableBody
							className={clsx(
								'datagrid-body',
								className,
								DatagridClasses.tbody
							)}
							ref={droppableProvided.innerRef}
							{...droppableProvided.droppableProps}
							{...rest}
						>
							{localData.map((record, rowIndex) => (
								<Draggable
									draggableId={record?.id.toString()}
									index={record?.[draggableField] ?? rowIndex}
									key={record.id ?? `row${rowIndex}`}
								>
									{(draggableProvided, snapshot) => {
										return (
											<DraggableProvider
												provided={{
													dragHandleProps: draggableProvided.dragHandleProps
												}}
												snapshot={snapshot}
											>
												{cloneElement(
													row,
													{
														className: clsx(DatagridClasses.row, {
															[DatagridClasses.rowEven]: rowIndex % 2 === 0,
															[DatagridClasses.rowOdd]: rowIndex % 2 !== 0
														}),
														expand,
														hasBulkActions: hasBulkActions && !!selectedIds,
														hover,
														id: record.id ?? `row${rowIndex}`,
														key: record.id ?? `row${rowIndex}`,
														onToggleItem,
														record,
														resource,
														rowClick,
														selectable:
															!isRowSelectable || isRowSelectable(record),
														selected: selectedIds?.includes(record.id),
														style: rowStyle ? rowStyle(record, rowIndex) : null,
														index: rowIndex,
														ref: draggableProvided.innerRef,
														...draggableProvided.draggableProps
														// Enable this if you want to drag the row by the handle
														// ...draggableProvided.dragHandleProps
													},
													children
												)}
											</DraggableProvider>
										);
									}}
								</Draggable>
							))}
							{droppableProvided.placeholder}
						</TableBody>
					);
				}}
			</Droppable>
		</DragDropContext>
	);
};

DraggableDatagridBody.propTypes = {
	...RaDatagridBody.propTypes,
	draggableField: PropTypes.string.isRequired
};

DraggableDatagridBody.defaultProps = {
	...RaDatagridBody.defaultProps,
	draggableField: 'order_index'
};

// trick Material UI Table into thinking this is one of the child type it supports
// @ts-ignore
DraggableDatagridBody.muiName = 'TableBody';

export const PureDraggableDatagridBody = memo(DraggableDatagridBody);

// trick Material UI Table into thinking this is one of the child type it supports
// @ts-ignore
PureDraggableDatagridBody.muiName = 'TableBody';
// @ts-ignore
PureDraggableDatagridBody.defaultProps = {
	row: <PureDatagridRow />
};

export default DraggableDatagridBody;
