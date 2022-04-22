import * as React from "react";
import { CrudContext } from "friendsofbabba-ra";
import { Datagrid, SimpleList, List as RaList, Loading } from "react-admin";
import Component from "./Component";
import { useMediaQuery } from "@material-ui/core";
import { get } from "lodash";
import useCustomComponents from "./useCustomComponents";

import fields from "../fields/index.js";
import inputs from "../inputs/index.js";
import buttons from "../buttons/index.js";

const List = (props) => {
  const { getGrid, loading } = React.useContext(CrudContext);
  const grid = getGrid(props.resource);
  const customComponents = useCustomComponents(props.resource);
  const isSmall = useMediaQuery((theme) =>
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
      title={grid.title}
      filter={grid.filter || {}}
      filterDefaultValues={grid.filterDefaultValues || {}}
      sort={grid?.sort}
      perPage={grid?.perPage}
      filters={grid?.filters?.map(
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
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => get(record, grid?.mobilePrimaryText)}
          secondaryText={(record) => get(record, grid?.mobileSecondaryText)}
          tertiaryText={(record) => get(record, grid?.mobileTertiaryText)}
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
