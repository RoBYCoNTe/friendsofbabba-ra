import React, {
  useEffect,
  useMemo,
} from 'react';

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
import {
  alpha,
  styled,
  useTheme,
} from '@mui/material/styles';

import { NAV } from './config';
import useResponsive from './hooks/useResponsive';
import DefaultLogo from './Logo';
import DefaultMenu from './menu/vertical/MenuVertical';
import DefaultMenuBottom from './menu/vertical/MenuVerticalBottom';
import SidebarToggleButton from './SidebarToggleButton';

const StyledAccount = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(2, 2.5),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
	backgroundColor: alpha(theme.palette.grey[500], 0.12)
}));

const Sidebar = ({
	openNav,
	onCloseNav,
	menu: Menu = DefaultMenu,
	menuBottom: MenuBottom = DefaultMenuBottom,
	menuGroups = [],
	logo
}) => {
	const { pathname } = useLocation();
	const theme = useTheme();
	const isDesktop = useResponsive('up', 'lg');
	const { data: identity, isLoading } = useGetIdentity();
	const Logo = useMemo(() => {
		const logoType = typeof logo;
		switch (logoType) {
			case 'string':
				return <DefaultLogo src={logo} />;
			case 'function':
				const CustomLogo = logo;
				return <CustomLogo />;
			default:
				return undefined;
		}
	}, [logo]);

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
			{Logo && (
				<Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
					{React.cloneElement(Logo)}
				</Box>
			)}
			<Box sx={{ mb: 5, mx: 2.5 }}>
				<Link underline="none">
					<StyledAccount>
						{identity?.avatar ? (
							<Avatar src={identity.avatar} alt="Avatar" />
						) : (
							<Avatar sx={{ bgcolor: theme.palette.primary.main }}>
								{identity?.name?.[0] || ''.toUpperCase()}
							</Avatar>
						)}
						<Box sx={{ ml: 2 }}>
							<Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
								{identity?.full_name}
							</Typography>
							{identity?.roles && (
								<Typography variant="body2" sx={{ color: 'text.secondary' }}>
									{identity?.roles
										.reduce((acc, role) => {
											return `${acc} ${role.name}, `;
										}, '')
										.slice(0, -2)}
								</Typography>
							)}
						</Box>
					</StyledAccount>
				</Link>
			</Box>
			<Menu groups={menuGroups} />
			{MenuBottom && (
				<>
					<Box sx={{ flexGrow: 1 }} />
					<MenuBottom />
				</>
			)}
		</>
	);

	return (
		<Box
			component="nav"
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV.W_DASHBOARD }
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
							bgcolor: 'background.default',
							borderRightStyle: 'dashed'
						}
					}}
				>
					{renderContent}
				</Drawer>
			) : (
				<Drawer
					open={openNav}
					onClose={onCloseNav}
					ModalProps={{
						keepMounted: true
					}}
					PaperProps={{
						sx: { width: NAV.W_DASHBOARD }
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
	menu: PropTypes.func,
	menuBottom: PropTypes.func,
	menuGroups: PropTypes.array,
	logo: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default Sidebar;
