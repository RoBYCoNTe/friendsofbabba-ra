import * as React from "react";
import * as buttons from "../button/index.js";
import * as fields from "../field/index.js";
import * as inputs from "../input/index.js";
import * as lists from "../list/index.js";

import {
  Filter,
  Loading,
  List as RaList,
  SimpleList,
  useTranslate,
} from "react-admin";

import Actions from "./Actions";
import BulkActionButtons from "./BulkActionButtons.js";
import Component from "./Component";
import { CrudContext } from "ra-friendsofbabba";
import Datagrid from "../list/Datagrid";
import Empty from "./Empty.js";
import exporter from "./exporter";
import { get } from "lodash";
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
      actions={<Actions grid={grid} customComponents={customComponents} />}
      pagination={grid?.pagination}
      exporter={
        grid?.exporter !== false
          ? (data) => exporter(grid, data, translate)
          : false
      }
      filterDefaultValues={grid.filterDefaultValues || {}}
      sort={grid?.sort}
      empty={<Empty grid={grid} />}
      perPage={grid?.perPage}
      bulkActionButtons={
        hasBulkActionButtons ? (
          <BulkActionButtons grid={grid} customComponents={customComponents} />
        ) : (
          false
        )
      }
      filters={
        grid?.filters ? (
          <Filter>
            {grid?.filters?.map(
              ({ source, component, componentProps, ...props }) => (
                <Component
                  {...props}
                  key={source}
                  source={source}
                  component={component}
                  componentProps={componentProps}
                  components={{ ...inputs, ...customComponents }}
                  alwaysOn={componentProps?.alwaysOn}
                />
              )
            )}
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
          primaryText={(record) =>
            grid?.mobilePrimaryComponent ? (
              <Component
                {...grid.mobilePrimaryComponent}
                record={record}
                source={grid?.mobilePrimaryText}
                components={{
                  ...fields,
                  ...inputs,
                  ...buttons,
                  ...customComponents,
                }}
              />
            ) : (
              get(record, grid?.mobilePrimaryText)
            )
          }
          secondaryText={(record) =>
            grid?.mobileSecondaryComponent ? (
              <Component
                {...grid.mobileSecondaryComponent}
                record={record}
                source={grid?.mobileSecondaryText}
                components={{
                  ...fields,
                  ...inputs,
                  ...buttons,
                  ...customComponents,
                }}
              />
            ) : (
              get(record, grid?.mobileSecondaryText)
            )
          }
          tertiaryText={(record) =>
            grid?.mobileTertiaryComponent ? (
              <Component
                {...grid.mobileTertiaryComponent}
                record={record}
                source={grid?.mobileTertiaryText}
                components={{
                  ...fields,
                  ...inputs,
                  ...buttons,
                  ...customComponents,
                }}
              />
            ) : (
              get(record, grid?.mobileTertiaryText)
            )
          }
          linkType={grid?.mobileLinkType}
        />
      ) : (
        <Datagrid {...grid?.componentProps}>
          {grid?.columns?.map(
            ({
              source,
              label,
              sortable,
              component,
              sortBy,
              componentProps,
            }) => (
              <Component
                key={source}
                {...(component.indexOf("Button") === -1
                  ? { source, label, sortable, sortBy, addLabel: false }
                  : {})}
                component={component}
                componentProps={componentProps}
                components={{
                  ...fields,
                  ...inputs,
                  ...buttons,
                  ...customComponents,
                }}
              />
            )
          )}
        </Datagrid>
      )}
    </RaList>
  );
};
export default List;
