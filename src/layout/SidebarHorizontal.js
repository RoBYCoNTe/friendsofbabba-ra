import React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  useTheme,
} from '@mui/material';

import { HEADER } from './config';
import Menu from './menu/horizontal/MenuHorizontal';
import { bgBlur } from './utils/cssStyles';

const Shadow = ({ sx, ...other }) => {
	return (
		<Box
			sx={{
				left: 0,
				right: 0,
				bottom: 0,
				height: 24,
				zIndex: -1,
				width: 1,
				m: "auto",
				borderRadius: "50%",
				position: "absolute",
				boxShadow: (theme) => theme.customShadows.z8,
				...sx,
			}}
			{...other}
		/>
	);
};

const SidebarHorizontal = () => {
	const theme = useTheme();
	return (
		<AppBar
			component="nav"
			color="transparent"
			sx={{
				boxShadow: 0,
				top: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
			}}
		>
			<Toolbar
				sx={{
					...bgBlur({
						color: theme.palette.background.default,
					}),
				}}
			>
				<Menu />
			</Toolbar>
			<Shadow />
		</AppBar>
	);
};

export default SidebarHorizontal;
