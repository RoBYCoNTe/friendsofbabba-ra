import * as React from "react";
import * as buttons from "../button/index.js";

import {
  CreateButton,
  ExportButton,
  FilterButton,
  FilterContext,
  TopToolbar,
} from "react-admin";
import { cloneElement, useContext, useMemo } from "react";
import {
  sanitizeListRestProps,
  useListContext,
  useResourceContext,
  useResourceDefinition,
} from "ra-core";

import Component from "./Component";
import ExportToButton from "../button/ExportToButton";
import PropTypes from "prop-types";

const ListActions = ({ grid, customComponents, ...props }) => {
  const { className, exporter, filters: filtersProp, ...rest } = props;
  const {
    currentSort,
    displayedFilters,
    filterValues,
    basePath,
    showFilter,
    total,
  } = useListContext(props);
  const resource = useResourceContext(rest);
  const { hasCreate } = useResourceDefinition(rest);
  const filters = useContext(FilterContext) || filtersProp;
  return useMemo(
    () => (
      <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
        {filtersProp
          ? cloneElement(filtersProp, {
              resource,
              showFilter,
              displayedFilters,
              filterValues,
              context: "button",
            })
          : filters && <FilterButton />}
        {grid?.canCreate !== false && hasCreate && (
          <CreateButton basePath={basePath} />
        )}
        {grid?.exportTo?.length > 0 ? (
          <ExportToButton
            exportTo={grid?.exportTo}
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            filterValues={filterValues}
          />
        ) : (
          exporter !== false && (
            <ExportButton
              disabled={total === 0}
              resource={resource}
              sort={currentSort}
              filterValues={filterValues}
            />
          )
        )}
        {grid?.actions?.map(
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
      </TopToolbar>
    ),
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      resource,
      displayedFilters,
      filterValues,
      showFilter,
      filters,
      total,
      basePath,
      className,
      currentSort,
      exporter,
      hasCreate,
    ]
  );
};

ListActions.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  currentSort: PropTypes.any,
  displayedFilters: PropTypes.object,
  exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  filters: PropTypes.element,
  filterValues: PropTypes.object,
  hasCreate: PropTypes.bool,
  resource: PropTypes.string,
  onUnselectItems: PropTypes.func.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.any),
  showFilter: PropTypes.func,
  total: PropTypes.number,
};

ListActions.defaultProps = {
  selectedIds: [],
  onUnselectItems: () => null,
};

export default ListActions;
