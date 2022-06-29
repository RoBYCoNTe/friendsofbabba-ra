import * as React from "react";
import * as buttons from "../button/index.js";
import * as fields from "../field/index.js";
import * as inputs from "../input/index.js";
import * as lists from "../list/index.js";

import { Filter, Loading, List as RaList, useTranslate } from "react-admin";

import Component from "./Component";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import Datagrid from "../list/Datagrid";
import ListActions from "./ListActions";
import ListBulkActionButtons from "./ListBulkActionButtons";
import ListEmpty from "./ListEmpty";
import SimpleList from "./SimpleList";
import exporter from "./exporter";
import useCustomComponents from "./useCustomComponents";
import { useMediaQuery } from "@material-ui/core";

const List = (props) => {
  const translate = useTranslate();
  const { getGrid, loading } = React.useContext(CrudContext);
  const grid = getGrid(props.resource);
  const customComponents = useCustomComponents(props.resource);
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
    <RaList
      {...props}
      title={grid.title}
      filter={grid.filter || {}}
      actions={<ListActions grid={grid} customComponents={customComponents} />}
      pagination={grid?.pagination}
      exporter={
        grid?.exporter !== false
          ? (data) => exporter(grid, data, translate)
          : false
      }
      filterDefaultValues={grid.filterDefaultValues || {}}
      sort={grid?.sort}
      empty={<ListEmpty grid={grid} />}
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
        grid?.filters ? (
          <Filter>
            {Component.mapFilters(grid.filters, {
              ...inputs,
              ...customComponents,
            })}
          </Filter>
        ) : null
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
          primarySource={grid?.mobilePrimaryText}
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
        <Datagrid {...grid?.componentProps}>
          {Component.mapColumns(grid?.columns, {
            ...fields,
            ...inputs,
            ...buttons,
            ...customComponents,
          })}
        </Datagrid>
      )}
    </RaList>
  );
};
export default List;
