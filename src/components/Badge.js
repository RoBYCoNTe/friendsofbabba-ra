import { Badge as MuiBadge } from "@material-ui/core";
import React from "react";
const Badge = ({ titleAccess, children, ...props }) => (
  <MuiBadge {...props}>{children}</MuiBadge>
);

export default Badge;
