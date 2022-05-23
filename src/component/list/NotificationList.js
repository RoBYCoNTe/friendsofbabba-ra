import { DateAgoField, NotificationField } from "../field/index.js";
import React, { useCallback } from "react";
import { lighten, useTheme } from "@material-ui/core/styles";

import Datagrid from "./Datagrid";

const handleRowClick = (id, basePath, record) => record?.resource;

const NotificationList = ({ ...props }) => {
  const theme = useTheme();
  const handleRowStyle = useCallback(
    (record) => ({
      marginLeft: -2,
      borderLeftWidth: 2,
      borderLeftStyle: "solid",
      borderLeftColor: record?.readed
        ? lighten(theme.palette.primary.light, 0.9)
        : theme.palette.warning.light,
      backgroundColor: record?.readed
        ? lighten(theme.palette.primary.light, 0.9)
        : lighten(theme.palette.warning.light, 0.8),
    }),
    [theme]
  );
  return (
    <Datagrid
      {...props}
      evenOdd={false}
      rowClick={handleRowClick}
      rowStyle={handleRowStyle}
    >
      <NotificationField source="notification" sortable={false} />
      <DateAgoField source="created" />
    </Datagrid>
  );
};

export default NotificationList;
