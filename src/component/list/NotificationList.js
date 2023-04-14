import React, {
  useCallback,
  useMemo,
} from 'react';

import moment from 'moment';
import { useDataProvider } from 'react-admin';

import {
  darken,
  lighten,
  useTheme,
} from '@mui/material';

import MarkAsReadedButton from '../button/MarkAsReadedButton.js';
import MarkAsUnreadedButton from '../button/MarkAsUnreadedButton.js';
import {
  DateAgoField,
  NotificationField,
} from '../field/index.js';
import ActionsMenu from '../mui/ActionsMenu.js';
import Datagrid from './Datagrid';

const NotificationList = ({ ...props }) => {
	const theme = useTheme();
	const { mode, colorize, density } = useMemo(
		() => ({
			mode: theme.palette.mode,
			colorize: theme.palette.mode === "dark" ? darken : lighten,
			density: theme.palette.mode === "dark" ? 0.5 : 0.9,
		}),
		[theme.palette.mode]
	);
	const handleRowStyle = useCallback(
		(record) => ({
			marginLeft: -2,
			borderLeftWidth: 2,
			borderLeftStyle: "solid",
			borderLeftColor: record?.readed
				? colorize(theme.palette.primary[mode], density)
				: theme.palette.secondary[mode],
			backgroundColor: record?.readed
				? colorize(theme.palette.primary[mode], density)
				: colorize(theme.palette.secondary[mode], density),
		}),
		[theme, mode, colorize, density]
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
			showPrimaryKey={false}
			actions={
				<ActionsMenu
					actions={[<MarkAsReadedButton />, <MarkAsUnreadedButton />]}
				/>
			}
			rowClick={handleRowClick}
			rowStyle={handleRowStyle}
		>
			<NotificationField source="notification" sortable={false} />
			<DateAgoField source="created" />
		</Datagrid>
	);
};

export default NotificationList;
