import React, {
  Fragment,
  useMemo,
} from 'react';

import { get } from 'lodash';
import PropTypes from 'prop-types';
import {
  EditButton,
  Labeled,
  ReferenceManyField,
  useInput,
} from 'react-admin';

import { useMediaQuery } from '@mui/material';

import DeleteWithConfirmButton from '../button/DeleteWithConfirmButton';
import Component from '../crud/Component';
import SimpleList from '../crud/SimpleList';
import Datagrid from '../list/Datagrid';
import EmptyMessage from './reference-list/EmptyMessage';
import Pagination from './reference-list/Pagination';
import Sorry from './reference-list/SorryMessage';
import Toolbar from './reference-list/Toolbar';
import useMakeRedirect from './reference-list/useMakeRedirect';
import ValidationError from './reference-list/ValidationError';

/**
 * Render list of records related to the current record.
 * Use `ReferenceManyField` inside to retrieve and display data.
 * This component can be customized in many ways, please referer to the
 * current documentation to understand how to use it.
 *
 * @param {Object} props
 * @param {Object|null} props.additionalData
 *  Additional data to pass to referenced record's form when creating a new record.
 * @param {Array|null} props.columns
 *  List of dynamic columns to render inside this component.
 *  This prop is used by the Crud Engine to automatically render dynamic columns.
 *  You should not use this prop directly and specify children instead.
 *
 * @param {Object} props.components
 *  Components to use for rendering the list of referenced records.
 *  This prop is used by the Crud Engine to automatically render dynamic columns.
 *  This prop is used too by SimpleList, in mobile view, to render dynamic columns.
 *
 * @param {Boolean} props.create
 *  Whether to display the create button.
 *
 * @param {String} props.createLabel
 *  Label to use for the create button.
 *
 * @param {String|Function|JSX.Element} props.empty
 *  Message to display when there are no records to display.
 *
 * @param {Object} props.filter
 *  Filter to apply to the list of referenced records.
 *
 * @param {String} props.mobileBreakpoint
 *  Breakpoint at which the list of referenced records is displayed
 *  in a mobile view (SimpleList).
 *
 * @param {String|Boolean|Function} props.linkType
 *  The type of link to use for the list.
 *  It can be:
 *   - a function referencing record: `(record, id) => link`;
 *   - false to disable links: `false`;
 *   - static string;
 *
 * @param {String} props.mobilePrimaryText
 *  Name of the primary source to display.
 *  If no component is provided (`primaryComponent`),
 *  the primary source will be displayed as a string.
 *
 * @param {String} props.mobilePrimaryComponent
 *  Name of the primary component to display.
 *  If specified, the component will receive the primary source as a prop
 *  and will be responsible for rendering the primary source.
 *
 * @param {Object|null} props.mobilePrimaryComponentProps
 *  Additional props to pass to the primary component.
 *
 * @param {String|null} props.mobileSecondaryText
 *  Name of the secondary source to display.
 *  If no component is provided (`secondaryComponent`),
 *  the secondary source will be displayed as a string.
 *
 * @param {String|null} props.mobileSecondaryComponent
 *  Name of the secondary component to display.
 *  If specified, the component will receive the secondary source as a prop
 *  and will be responsible for rendering the secondary source.
 *
 * @param {Object|null} props.mobileSecondaryComponentProps
 *  Additional props to pass to the secondary component.
 *
 * @param {String|null} props.mobileTertiaryText
 *  Name of the tertiary source to display.
 *  If no component is provided (`tertiaryComponent`),
 *  the tertiary source will be displayed as a string.
 *
 * @param {String|null} props.mobileTertiaryComponent
 *  Name of the tertiary component to display.
 *  If specified, the component will receive the tertiary source as a prop
 *  and will be responsible for rendering the tertiary source.
 *
 * @param {Object|null} props.mobileTertiaryComponentProps
 *  Additional props to pass to the tertiary component.
 *
 * @param {Boolean} props.modify
 *  Whether to display the modify button.
 *
 * @param {String} props.modifyLabel
 *  Label to use for the modify button.
 *
 * @param {String} props.reference
 *  Referenced records resource name.
 *
 * @param {Boolean} props.remove
 *  Whether to display the remove button.
 *
 * @param {String} props.removeLabel
 *  Label to use for the remove button.
 *
 * @param {String|null} props.removeRedirect
 *  Default redirect to use after removing a referenced record.
 *  This is a string, if not specified is automatically generated based on
 *  current opened record and specified tab.
 *
 * @param {String|Function|JSX.Element} props.sorry
 *  Message to display when the list of referenced records is inside newly created record.
 *
 * @param {Number} props.tab
 *  Tab index where this field is located.
 *  Tab is used to generate default redirect to use after removing a referenced record.
 *
 * @param {String} props.target
 *  Target column to filter with current record primary key.
 *  Suppose you are retrieving blog-post-comments, your target column should be `blog_post_id`.
 *
 * @param {Object} props.record
 *  Current record (used for many things).
 *
 * @param {String} props.foreignKey
 *  Foreign key to use to filter the list of referenced records.
 *  Default is `id`.
 *  Suppose you are retrieving blog-post-comments, your foreign key should be `id`.
 * @returns {JSX.Element}
 */
const ReferenceListField = ({
	additionalData,
	columns = [],
	components = {},
	create = true,
	createLabel = "ra.action.create",
	empty = "ra.no_results",
	filter,
	mobileBreakpoint,
	mobileLinkType = false,
	mobilePrimaryComponent = null,
	mobilePrimaryComponentProps = null,
	mobilePrimaryText = null,
	mobileSecondaryComponent = null,
	mobileSecondaryComponentProps = null,
	mobileSecondaryText = null,
	mobileTertiaryComponent = null,
	mobileTertiaryComponentProps = null,
	mobileTertiaryText = null,
	modify = true,
	modifyLabel = "ra.action.edit",
	reference,
	remove = true,
	removeLabel = "ra.action.delete",
	removeRedirect,
	sorry = "ra.reference_list.sorry",
	displaySorry = true,
	tab = 0,
	target,
	foreignKey = "id",
	...props
}) => {
	const { resource, record } = props;
	const {
		fieldState: { error },
	} = useInput({ ...props });
	const isMobile = useMediaQuery((theme) =>
		theme.breakpoints.down(mobileBreakpoint ?? "sm")
	);
	const parentRecordExists = useMemo(() => record?.id > 0, [record?.id]);
	const removeRedir = useMakeRedirect({
		resource,
		record,
		tab,
		defaultRedirect: removeRedirect,
	});
	if (!parentRecordExists && sorry === false) {
		return null;
	}

	const content = parentRecordExists ? (
		<Fragment>
			<ReferenceManyField
				{...props}
				empty={<EmptyMessage emptyText={empty} />}
				reference={reference}
				target={target}
				filter={{ [target]: get(record, foreignKey), ...filter }}
				pagination={<Pagination />}
			>
				{isMobile &&
				mobileBreakpoint !== false &&
				mobilePrimaryText !== null ? (
					<SimpleList
						primarySource={mobilePrimaryText}
						primaryComponent={mobilePrimaryComponent}
						primaryComponentProps={mobilePrimaryComponentProps}
						secondarySource={mobileSecondaryText}
						secondaryComponent={mobileSecondaryComponent}
						secondaryComponentProps={mobileSecondaryComponentProps}
						tertiarySource={mobileTertiaryText}
						tertiaryComponent={mobileTertiaryComponent}
						tertiaryComponentProps={mobileTertiaryComponentProps}
						linkType={mobileLinkType}
						components={components}
					/>
				) : (
					<Datagrid inner>
						{React.Children.map(props.children, (field, index) =>
							React.isValidElement(field)
								? React.cloneElement(field, { key: index })
								: null
						)}
						{Component.mapColumns(columns, components, {
							disabled: props.disabled,
						})}
						{!props.disabled && modify && <EditButton />}
						{!props.disabled && remove && (
							<DeleteWithConfirmButton redirect={removeRedir} />
						)}
					</Datagrid>
				)}
			</ReferenceManyField>
			<ValidationError submitError={error} />
			{!props.disabled && create && parentRecordExists > 0 && (
				<Toolbar
					{...{
						additionalData,
						createLabel,
						record,
						reference,
						resource,
						target,
					}}
				/>
			)}
		</Fragment>
	) : (
		<Sorry sorryText={sorry} />
	);
	return props?.addLabel !== false ? (
		<Labeled
			{...props}
			label={props?.label}
			sx={(theme) => ({
				// "& .MuiFormLabel-root": {
				//   padding: theme.spacing(1),
				// },
				"& .MuiCardContent-root:first-child": {
					padding: theme.spacing(1),
					paddingTop: 0,
					paddingBottom: 0,
				},
				"& .MuiTablePagination-toolbar > .MuiTablePagination-input > div": {
					// Fix alignment of the input with consecutive pagination buttons
					paddingTop: theme.spacing(1),
				},
			})}
			fullWidth={props?.fullWidth}
		>
			{content}
		</Labeled>
	) : (
		content
	);
};

ReferenceListField.propTypes = {
	tab: PropTypes.number,
	sorry: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.func,
		PropTypes.bool,
	]),
	mobileBreakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	mobilePrimaryText: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func,
		PropTypes.string,
	]),
	mobilePrimaryComponent: PropTypes.string,
	mobilePrimaryComponentProps: PropTypes.object,
	mobileSecondaryText: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func,
		PropTypes.string,
	]),
	mobileSecondaryComponent: PropTypes.string,
	mobileSecondaryComponentProps: PropTypes.object,
	mobileTertiaryText: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func,
		PropTypes.string,
	]),
	mobileTertiaryComponent: PropTypes.string,
	mobileTertiaryComponentProps: PropTypes.object,

	mobileLinkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	additionalData: PropTypes.object,
	removeRedirect: PropTypes.string,
	filter: PropTypes.object,
	create: PropTypes.bool,
	createLabel: PropTypes.string,
	modify: PropTypes.bool,
	modifyLabel: PropTypes.string,
	remove: PropTypes.bool,
	removeLabel: PropTypes.string,
	source: PropTypes.string,
	reference: PropTypes.string,
	target: PropTypes.string,
	record: PropTypes.object,
	resource: PropTypes.string,
	children: PropTypes.node,
	columns: PropTypes.array,
};

export default ReferenceListField;
