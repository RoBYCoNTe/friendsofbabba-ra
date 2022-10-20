import { DateAgoField, NotificationField } from "../field/index.js";
import React, { memo, useCallback, useMemo } from "react";
import { darken, lighten, useTheme } from "@material-ui/core/styles";

import Datagrid from "./Datagrid";
import moment from "moment";
import { useDataProvider } from "react-admin";

const NotificationList = ({ ...props }) => {
  const theme = useTheme();

  const { type, colorize, density } = useMemo(
    () => ({
      type: theme.palette.type,
      colorize: theme.palette.type === "dark" ? darken : lighten,
      density: theme.palette.type === "dark" ? 0.5 : 0.9,
    }),
    [theme.palette.type]
  );
  const handleRowStyle = useCallback(
    (record) => ({
      marginLeft: -2,
      borderLeftWidth: 2,
      borderLeftStyle: "solid",
      borderLeftColor: record?.readed
        ? colorize(theme.palette.primary[type], density)
        : theme.palette.secondary[type],
      backgroundColor: record?.readed
        ? colorize(theme.palette.primary[type], density)
        : colorize(theme.palette.secondary[type], density),
    }),
    [theme, type, colorize, density]
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
