import * as buttons from "../button/index.js";

import React, { Fragment } from "react";

import { BulkDeleteButton } from "react-admin";
import Component from "./Component";

const BulkActionButtons = ({ grid, customComponents, ...props }) => (
  <Fragment>
    {grid?.bulkActionButtons?.map(({ component, componentProps }, index) => (
      <Component
        {...props}
        key={index}
        component={component}
        componentProps={componentProps}
        components={{ ...buttons, ...customComponents }}
      />
    ))}
    {grid?.canDelete !== false && <BulkDeleteButton {...props} />}
  </Fragment>
);
export default BulkActionButtons;
