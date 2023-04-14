import React from "react";

import { get } from "lodash";
import PropTypes from "prop-types";
import { ErrorBoundary } from "react-error-boundary";

import { Box, Typography, useTheme } from "@mui/material";

const Error = ({ error, label, source }) => {
	const theme = useTheme();
	return (
		<Box sx={{ margin: theme.spacing(2) }}>
			<Typography variant="caption">{label || source}</Typography>
			<Typography variant="body2">{error?.message || error}</Typography>
		</Box>
	);
};

const ComponentWrapper = ({
	component,
	componentProps,
	components,
	addLabel = true,
	sortBy,
	...props
}) => {
	const Component = get(components, component);
	if (!Component) {
		return (
			<Error
				{...props}
				{...componentProps}
				error={`Component ${component} not found.`}
			/>
		);
	}
	return <Component {...props} {...componentProps} />;
};

/**
 * Render a component using a dictionary of components.
 * This component can catch and handle internal errors (e.g. when a component is not found)
 * and display a fallback message containing the error details.
 *
 * @param {Object} props
 * @param {String} props.component The name of the component to render.
 * @param {Object} props.componentProps The props to pass to the component.
 * @param {Object} props.components A dictionary of components renderable by name.
 * @param {Boolean} props.addLabel Whether to add a label to the component.
 *
 * @returns {JSX.Element}
 */
const Component = (props) => {
	return (
		<ErrorBoundary
			FallbackComponent={({ error }) => <Error {...props} error={error} />}
		>
			<ComponentWrapper {...props} />
		</ErrorBoundary>
	);
};

/**
 * Render list fileds using component configured in the `components` prop.
 *
 * @param {Array} filters
 *  An array of filters to render.
 *
 * @param {Object} components
 *  A dictionary of components renderable by name.
 *
 * @param {Object} props
 *  Additional props to pass to the tertiary component.
 *
 * @returns {Array}
 */
Component.mapFilters = (filters, components, props = {}) =>
	filters?.map(({ source, component, componentProps, ...restProps }) => (
		<Component
			{...props}
			{...restProps}
			key={source}
			source={source}
			component={component}
			componentProps={componentProps}
			components={components}
			alwaysOn={componentProps?.alwaysOn}
		/>
	));

/**
 * This method render list of columns configured with specific components inside a datagrid.
 * **Remember**: do not use this method outside `Datagrid` components, it will
 * not work as expected.
 *
 * @param {Array} columns
 *  An array of columns to render.
 *
 * @param {Object} components
 *  A dictionary of components renderable by name.
 *
 * @param {Object} props
 *  Additional props to pass to the tertiary component.
 *
 * @returns {Array}
 */
Component.mapColumns = (columns, components, props = {}) =>
	columns?.map(
		({ source, label, sortable, component, sortBy, componentProps }) => (
			<Component
				{...props}
				key={source}
				{...(component.indexOf("Button") === -1
					? { source, label, sortable, sortBy, addLabel: false }
					: {})}
				component={component}
				componentProps={componentProps}
				components={components}
			/>
		)
	);

export default Component;

const ComponentProps = Component;

ComponentProps.propTypes = {
	component: PropTypes.string.isRequired,
	componentProps: PropTypes.object,
	components: PropTypes.object.isRequired,
	addLabel: PropTypes.bool,
};
