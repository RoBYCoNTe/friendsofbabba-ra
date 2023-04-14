import React, { useState } from 'react';

import {
  useLogout,
  useTranslate,
} from 'react-admin';

import {
  Avatar,
  Box,
  Divider,
  IconButton,
  MenuItem,
  Popover,
  Typography,
} from '@mui/material';
// @mui
import {
  alpha,
  useTheme,
} from '@mui/material/styles';

import {
  useIsImpersonating,
  useUndoImpersonate,
} from '../data/createAuthProvider';

const AccountPopover = ({ identity }) => {
	const theme = useTheme();
	const translate = useTranslate();
	const [open, setOpen] = useState(null);
	const logout = useLogout();

	const isImpersonating = useIsImpersonating();
	const undoImpersonate = useUndoImpersonate();

	const handleOpen = (event) => {
		setOpen(event.currentTarget);
	};

	const handleClose = () => {
		setOpen(null);
	};

	return (
		<>
			<IconButton
				onClick={handleOpen}
				sx={{
					p: 0,
					...(open && {
						"&:before": {
							zIndex: 1,
							content: "''",
							width: "100%",
							height: "100%",
							borderRadius: "50%",
							position: "absolute",
							bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
						},
					}),
				}}
			>
				{identity?.avatar ? (
					<Avatar src={identity.avatar} alt="Avatar" />
				) : (
					<Avatar sx={{ bgcolor: theme.palette.primary.main }}>
						{identity?.name?.[0] || "".toUpperCase()}
					</Avatar>
				)}
			</IconButton>
			<Popover
				open={Boolean(open)}
				anchorEl={open}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				PaperProps={{
					sx: {
						p: 0,
						mt: 1.5,
						ml: 0.75,
						width: 250,
						"& .MuiMenuItem-root": {
							typography: "body2",
							borderRadius: 0.75,
						},
					},
				}}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant="subtitle2" noWrap>
						{identity.name}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
						{identity.email}
					</Typography>
				</Box>
				<Divider sx={{ borderStyle: "dashed" }} />
				<Divider sx={{ borderStyle: "dashed" }} />
				{isImpersonating && (
					<MenuItem
						onClick={() => {
							handleClose();
							undoImpersonate();
						}}
						sx={{ m: 1 }}
					>
						{translate("ra.auth.impersonating.undo", identity)}
					</MenuItem>
				)}
				<MenuItem
					onClick={() => {
						logout();
					}}
					sx={{ m: 1 }}
				>
					{translate("ra.auth.logout")}
				</MenuItem>
			</Popover>
		</>
	);
};

export default AccountPopover;
