import { DateAgoField, NotificationField } from "../field/index.js";
import React, { useCallback } from "react";
import { lighten, useTheme } from "@material-ui/core/styles";

import Datagrid from "./Datagrid";
import moment from "moment";
import { useDataProvider } from "react-admin";

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
  const dataProvider = useDataProvider();
  const handleRowClick = useCallback(
    (id, basePath, record) => {
      dataProvider.update("notifications", {
        id: record.id,
        data: {
          ...record,
          readed: moment().format(),
        },
      });
      return record?.resource;
    },
    [dataProvider]
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
