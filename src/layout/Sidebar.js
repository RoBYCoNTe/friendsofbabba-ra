import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useGetIdentity } from 'react-admin';
import { useLocation } from 'react-router-dom';

import {
  Avatar,
  Box,
  Drawer,
  Link,
  Typography,
} from '@mui/material';
// @mui
import {
  alpha,
  styled,
  useTheme,
} from '@mui/material/styles';

import { useFobContext } from '../context';
import { NAV } from './config';
import useResponsive from './hooks/useResponsive';
import Logo from './Logo';
import MenuVertical from './menu/vertical/MenuVertical';
import MenuVerticalBottom from './menu/vertical/MenuVerticalBottom';
import SidebarToggleButton from './SidebarToggleButton';

// ----------------------------------------------------------------------

const StyledAccount = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(2, 2.5),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
	backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const Sidebar = ({
	openNav,
	onCloseNav,
	menu: Menu = MenuVertical,
	menuBottom: MenuBottom = MenuVerticalBottom,
}) => {
	const { pathname } = useLocation();
	const theme = useTheme();
	const isDesktop = useResponsive("up", "lg");
	const { data: identity, isLoading } = useGetIdentity();
	const { menuGroups } = useFobContext();

	useEffect(() => {
		if (openNav) {
			onCloseNav();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	if (isLoading) {
		return null;
	}

	const renderContent = (
		<>
			<Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
				<Logo />
			</Box>
			<Box sx={{ mb: 5, mx: 2.5 }}>
				<Link underline="none">
					<StyledAccount>
						{identity?.avatar ? (
							<Avatar src={identity.avatar} alt="Avatar" />
						) : (
							<Avatar sx={{ bgcolor: theme.palette.primary.main }}>
								{identity?.name?.[0] || "".toUpperCase()}
							</Avatar>
						)}
						<Box sx={{ ml: 2 }}>
							<Typography variant="subtitle2" sx={{ color: "text.primary" }}>
								{identity?.full_name}
							</Typography>
							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								{identity?.roles
									.reduce((acc, role) => {
										return `${acc} ${role.name}, `;
									}, "")
									.slice(0, -2)}
							</Typography>
						</Box>
					</StyledAccount>
				</Link>
			</Box>
			{(menuGroups || []).length > 0 && <Menu />}
			{MenuBottom && (
				<>
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
						<MenuBottom />
					</Box>
				</>
			)}
		</>
	);

	return (
		<Box
			component="nav"
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV.W_DASHBOARD },
			}}
		>
			<SidebarToggleButton />
			{isDesktop ? (
				<Drawer
					open
					variant="permanent"
					PaperProps={{
						sx: {
							width: NAV.W_DASHBOARD,
							bgcolor: "background.default",
							borderRightStyle: "dashed",
						},
					}}
				>
					{renderContent}
				</Drawer>
			) : (
				<Drawer
					open={openNav}
					onClose={onCloseNav}
					ModalProps={{
						keepMounted: true,
					}}
					PaperProps={{
						sx: { width: NAV.W_DASHBOARD },
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</Box>
	);
};

Sidebar.propTypes = {
	openNav: PropTypes.bool,
	onCloseNav: PropTypes.func,
	menu: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	menuBottom: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};

export default Sidebar;
