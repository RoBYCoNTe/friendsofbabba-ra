import React from 'react';

import {
  Box,
  Stack,
} from '@mui/material';

import { NAV } from './config';
import Logo from './Logo';
import Menu from './menu/mini/MenuMini';
import SidebarToggleButton from './SidebarToggleButton';
import { hideScrollbarX } from './utils/cssStyles';

const SidebarMini = () => {
	return (
		<Box
			component="nav"
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV.W_DASHBOARD_MINI },
			}}
		>
			<SidebarToggleButton
				sx={{
					top: 22,
					left: NAV.W_DASHBOARD_MINI - 12,
				}}
			/>
			<Stack
				sx={{
					pb: 2,
					height: 1,
					position: "fixed",
					width: NAV.W_DASHBOARD_MINI,
					borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
					...hideScrollbarX,
				}}
			>
				<Logo sx={{ px: 1.2, my: 2 }} />
				<Menu />
			</Stack>
		</Box>
	);
};

export default SidebarMini;