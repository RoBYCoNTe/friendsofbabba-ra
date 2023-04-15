import React, {
  useEffect,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import {
  DateField,
  useGetList,
  useRedirect,
  useTranslate,
  useUpdateMany,
} from 'react-admin';

// @mui
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';

import Iconify from './Iconify';

// components
// require("moment/locale/it"); // importa il locale italiano
// ----------------------------------------------------------------------

const NotificationsPopover = () => {
	const { data, isLoading } = useGetList("notifications", {
		pagination: { page: 1, perPage: 50 },
		sort: { field: "created", order: "DESC" },
		filter: {
			readed: false,
		},
	});
	const translate = useTranslate();
	const redirect = useRedirect();
	const [notifications, setNotifications] = useState([]);
	const [open, setOpen] = useState(null);
	const [updateMany] = useUpdateMany();

	useEffect(() => {
		setNotifications(data || []);
	}, [data]);

	if (isLoading) {
		return null;
	}

	const unreaded = notifications.filter((item) => item.readed === null).length;

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	const handleMarkAllAsRead = () => {
		setNotifications(
			notifications.map((notification) => ({
				...notification,
				readed: true,
			}))
		);
		updateMany("notifications", {
			ids: notifications.map((item) => item.id),
			data: {
				readed: new Date(),
			},
		});
	};

	return (
		<>
			<IconButton
				color={open ? "primary" : "default"}
				onClick={handleOpen}
				sx={{ width: 40, height: 40 }}
			>
				<Badge badgeContent={unreaded} color="error">
					<Iconify icon="eva:bell-fill" />
				</Badge>
			</IconButton>
			<Popover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				PaperProps={{
					sx: {
						mt: 1.5,
						ml: 0.75,
						width: 360,
					},
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
					<Box sx={{ flexGrow: 1 }}>
						<Typography variant="subtitle1">
							{translate("ra.notifications.title")}
						</Typography>
						<Typography variant="body2" sx={{ color: "text.secondary" }}>
							{translate("ra.notifications.unreaded", {
								unreaded,
							})}
						</Typography>
					</Box>
					{unreaded > 0 && (
						<Tooltip title={translate("ra.notifications.read_all")}>
							<IconButton color="primary" onClick={handleMarkAllAsRead}>
								<Iconify icon="eva:done-all-fill" />
							</IconButton>
						</Tooltip>
					)}
				</Box>
				{notifications.length > 0 && (
					<>
						<Divider sx={{ borderStyle: "dashed" }} />
						<List disablePadding>
							{notifications.map((notification) => (
								<NotificationItem
									key={notification.id}
									notification={notification}
									onClose={handleClose}
								/>
							))}
						</List>
						<Divider sx={{ borderStyle: "dashed" }} />
					</>
				)}
				<Box sx={{ p: 1 }}>
					<Button
						fullWidth
						disableRipple
						onClick={() => {
							redirect("/notifications");
							handleClose();
						}}
					>
						{translate("ra.action.view_all")}
					</Button>
				</Box>
			</Popover>
		</>
	);
};

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
	notification: PropTypes.shape({
		created: PropTypes.instanceOf(Date),
		id: PropTypes.string,
		readed: PropTypes.bool,
		title: PropTypes.string,
		content: PropTypes.string,
		resource: PropTypes.string,
	}),
};

function NotificationItem({ notification, onClose }) {
	const { title, content, resource } = notification;
	const redirect = useRedirect();
	return (
		<ListItemButton
			onClick={() => {
				if (resource) {
					redirect(`/${resource}`);
				} else {
					redirect("/notifications");
				}
				onClose();
			}}
			sx={{
				py: 1.5,
				px: 2.5,
				mt: "1px",
				...(notification.readed && {
					bgcolor: "action.selected",
				}),
			}}
		>
			<ListItemText
				primary={
					<Typography variant="subtitle2">
						{title}
						<Typography
							component="span"
							variant="body2"
							sx={{ color: "text.secondary" }}
						>
							&nbsp; {content}
						</Typography>
					</Typography>
				}
				secondary={
					<Typography
						variant="caption"
						sx={{
							mt: 0.5,
							display: "flex",
							alignItems: "center",
							color: "text.disabled",
						}}
					>
						<Iconify
							icon="eva:clock-outline"
							sx={{ mr: 0.5, width: 16, height: 16 }}
						/>
						<DateField record={notification} source="created" showTime />
					</Typography>
				}
			/>
		</ListItemButton>
	);
}

export default NotificationsPopover;
