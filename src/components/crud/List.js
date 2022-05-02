import * as React from "react";
import { CrudContext } from "friendsofbabba-ra";
import { SimpleList, List as RaList, Loading, useTranslate } from "react-admin";
import Component from "./Component";
import { useMediaQuery } from "@material-ui/core";
import { get } from "lodash";
import useCustomComponents from "./useCustomComponents";

import fields from "../fields/index.js";
import inputs from "../inputs/index.js";
import buttons from "../buttons/index.js";
import Datagrid from "../lists/Datagrid";
import Filters from "../lists/Filters";
import useListStyles from "./useListStyles";
import exporter from "./exporter";

const List = (props) => {
  const classes = useListStyles();
  const translate = useTranslate();
  const { getGrid, loading } = React.useContext(CrudContext);
  const grid = getGrid(props.resource);
  const customComponents = useCustomComponents(props.resource);
  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.down(grid?.mobileBreakpoint ?? "sm")
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
      classes={classes}
      title={grid.title}
      filter={grid.filter || {}}
      exporter={(data) => exporter(grid, data, translate)}
      filterDefaultValues={grid.filterDefaultValues || {}}
      sort={grid?.sort}
      perPage={grid?.perPage}
      filters={
        grid?.filters ? (
          <Filters>
            {grid?.filters?.map(
              ({ source, label, component, componentProps, ...props }) => (
                <Component
                  {...props}
                  key={source}
                  source={source}
                  component={component}
                  componentProps={componentProps}
                  components={{ ...inputs, ...customComponents.inputs }}
                  alwaysOn={componentProps?.alwaysOn}
                />
              )
            )}
          </Filters>
        ) : null
      }
    >
      {isMobile ? (
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
                  ...customComponents.inputs,
                  ...customComponents.fields,
                  ...customComponents.buttons,
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
                  ...customComponents.inputs,
                  ...customComponents.fields,
                  ...customComponents.buttons,
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
                  ...customComponents.inputs,
                  ...customComponents.fields,
                  ...customComponents.buttons,
                }}
              />
            ) : (
              get(record, grid?.mobileTertiaryText)
            )
          }
          linkType={grid?.mobileLinkType}
        />
      ) : (
        <Datagrid>
          {grid?.columns?.map(
            ({ source, label, sortable, component, componentProps }) => (
              <Component
                key={source}
                {...(component.indexOf("Button") === -1
                  ? { source, label, sortable }
                  : {})}
                component={component}
                componentProps={componentProps}
                components={{
                  ...fields,
                  ...inputs,
                  ...buttons,
                  ...customComponents.inputs,
                  ...customComponents.fields,
                  ...customComponents.buttons,
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
