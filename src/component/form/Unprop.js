import React from "react";

const Unprop = ({ children, ...props }) =>
  React.Children.map(children, (child) =>
    React.isValidElement(child)
      ? React.cloneElement(child, { ...props, ...child.props })
      : child
  );

export default Unprop;
