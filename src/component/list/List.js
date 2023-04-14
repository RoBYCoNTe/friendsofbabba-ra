import React from 'react';

import PropTypes from 'prop-types';
import {
  List as RaList,
  ListBase,
  SearchInput,
  useResourceContext,
} from 'react-admin';

import {
  Card,
  styled,
} from '@mui/material';

import ListHeader from './ListHeader';
import ListToolbar from './ListToolbar';
import Pagination from './Pagination';

const StyledRoot = styled("div", {
	// Configure which props should be forwarded on DOM
	shouldForwardProp: (prop) =>
		prop !== "color" && prop !== "variant" && prop !== "sx",
	slot: "Root",
	name: "FobList",
	// We are specifying here how the styleOverrides are being applied based on props
	overridesResolver: (props, styles) => [styles.root],
})(({ theme }) => ({}));

const List = ({
	children,
	pagination,
	exporter,
	filters,
	actions,
	title,
	toolbar,
	header,
	bulkActionButtons,
	component: ListComponent,
	leftSide,
	rightSide,
	...props
}) => {
	const resource = useResourceContext();
	const listTitle = title || `resources.${resource}.name`;

	return (
		<StyledRoot>
			{header &&
				React.cloneElement(header, {
					title: listTitle,
					hasCreate: props?.hasCreate,
				})}
			{leftSide && React.cloneElement(leftSide)}
			<ListComponent>
				<ListBase {...props} exporter={exporter}>
					{toolbar &&
						React.cloneElement(toolbar, { filters, actions, exporter })}
					{children && React.isValidElement(children)
						? React.cloneElement(children, {
								bulkActionButtons,
						  })
						: children}
					{pagination && React.cloneElement(pagination)}
				</ListBase>
			</ListComponent>
			{rightSide && React.cloneElement(rightSide)}
		</StyledRoot>
	);
};

List.defaultProps = {
	...RaList.defaultProps,
	perPage: 25,
	header: <ListHeader />,
	toolbar: <ListToolbar />,
	pagination: <Pagination />,
	leftSide: false,
	rightSide: false,
	component: Card,
	filters: [<SearchInput source="q" alwaysOn />],
};

List.propTypes = {
	...RaList.propTypes,
	header: PropTypes.element,
	leftSide: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
	rightSide: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
	component: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.element,
		PropTypes.object,
	]),
};

export default List;
