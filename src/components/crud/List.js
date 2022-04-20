import * as React from "react";
import { CrudContext } from "friendsofbabba-ra";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  SimpleList,
  List as RaList,
  Loading,
} from "react-admin";
import Componentable from "./Componentable";
import { useMediaQuery } from "@material-ui/core";
import { get } from "lodash";
import useCustomComponents from "./useCustomComponents";

import fields from "./fields/index.js";
import inputs from "./inputs/index.js";

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
          <Componentable
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
              <Componentable
                key={source}
                source={source}
                label={label}
                sortable={sortable}
                component={component}
                componentProps={componentProps}
                components={{
                  ...fields,
                  ...customComponents.columns,
                }}
                addLabel={false}
              />
            )
          )}
          <EditButton />
          <DeleteButton />
        </Datagrid>
      )}
    </RaList>
  );
};
export default List;
