import React from "react";

import {
	Loading,
	useResourceContext,
	useResourceDefinitionContext,
	useTranslate,
} from "react-admin";

import { useMediaQuery } from "@mui/material";

import { useCrudContext } from "../../data";
import * as buttons from "../button/index.js";
import * as fields from "../field/index.js";
import * as inputs from "../input/index.js";
import { Datagrid, List as FobList } from "../list";
import * as lists from "../list/index.js";
import Component from "./Component";
import exporter from "./exporter";
import ListBulkActionButtons from "./ListBulkActionButtons";
import SimpleList from "./SimpleList";
import useCustomComponents from "./useCustomComponents";

const CrudList = () => {
	const translate = useTranslate();
	const { getGrid, loading } = useCrudContext();
	const resource = useResourceContext();
	const resources = useResourceDefinitionContext();
	const resourceDefinition = resources?.definitions?.[resource];
	const grid = getGrid(resource);
	const customComponents = useCustomComponents();
	const isMobile =
		useMediaQuery((theme) =>
			theme.breakpoints.down(grid?.mobileBreakpoint ?? "sm")
		) && grid.mobilePrimaryText != null;
	const hasBulkActionButtons = React.useMemo(
		() => grid?.bulkActionButtons?.length > 0 || grid?.canDelete !== false,
		[grid?.bulkActionButtons, grid?.canDelete]
	);

	if (loading) {
		return <Loading />;
	}
	if (grid === false || grid === null) {
		return null;
	}

	return (
		<FobList
			hasCreate={resourceDefinition?.hasCreate}
			title={grid.title}
			filter={grid.filter || {}}
			actions={grid?.actions?.map(
				({ label, component, componentProps, ...props }, index) => (
					<Component
						{...props}
						key={index}
						label={label}
						component={component}
						componentProps={componentProps}
						components={{ ...buttons, ...customComponents }}
					/>
				)
			)}
			pagination={grid?.pagination}
			exporter={
				grid?.exporter !== false
					? (data) => exporter(grid, data, translate)
					: false
			}
			filterDefaultValues={grid.filterDefaultValues || {}}
			sort={grid?.sort}
			perPage={grid?.perPage}
			bulkActionButtons={
				hasBulkActionButtons ? (
					<ListBulkActionButtons
						grid={grid}
						customComponents={customComponents}
					/>
				) : (
					false
				)
			}
			filters={
				grid?.filters
					? Component.mapFilters(grid.filters, {
							...inputs,
							...customComponents,
					  })
					: null
			}
		>
			{grid?.component && grid?.component !== "Datagrid" ? (
				<Component
					component={grid.component}
					componentProps={grid.componentProps}
					components={{
						Datagrid,
						SimpleList,
						...lists,
						...customComponents,
					}}
				/>
			) : isMobile ? (
				<SimpleList
					linkType={grid?.mobileLinkType}
					primaryText={grid?.mobilePrimaryText}
					primaryComponent={grid?.mobilePrimaryComponent?.component}
					primaryComponentProps={grid?.mobilePrimaryComponent?.componentProps}
					secondarySource={grid?.mobileSecondaryText}
					secondaryComponent={grid?.mobileSecondaryComponent?.component}
					secondaryComponentProps={
						grid?.mobileSecondaryComponent?.componentProps
					}
					tertiarySource={grid?.mobileTertiaryText}
					tertiaryComponent={grid?.mobileTertiaryComponent?.component}
					tertiaryComponentProps={grid?.mobileTertiaryComponent?.componentProps}
					components={{
						...fields,
						...inputs,
						...buttons,
						...customComponents,
					}}
				/>
			) : (
				<Datagrid showPrimaryKey={false} {...grid?.componentProps}>
					{Component.mapColumns(grid?.columns, {
						...fields,
						...inputs,
						...buttons,
						...customComponents,
					})}
				</Datagrid>
			)}
		</FobList>
	);
};

export default CrudList;
