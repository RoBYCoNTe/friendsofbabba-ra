import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { LoadingIndicator, useGetIdentity } from 'react-admin';

import { AppBar as MuiAppBar, IconButton, Stack, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useFobContext } from '../context';
import { HEADER, NAV } from './config';
import useOffSetTop from './hooks/useOffSetTop';
import useResponsive from './hooks/useResponsive';
import Iconify from './Iconify';
import DefaultLogo from './Logo';
import DefaultNotificationsMenu from './NotificationsMenu';
import DefaultUserMenu from './UserMenu';
import { bgBlur } from './utils/cssStyles';

const AppBar = ({
	onOpenNav,
	logo,
	userMenu: UserMenu = DefaultUserMenu,
	notificationsMenu: NotificationsMenu = DefaultNotificationsMenu,
	children
}) => {
	const theme = useTheme();
	const { themeLayout } = useFobContext();
	const { data: identity, isLoading } = useGetIdentity();
	const isNavHorizontal = themeLayout === 'horizontal';
	const isNavMini = themeLayout === 'mini';
	const isDesktop = useResponsive('up', 'lg');
	const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;
	const Logo = useMemo(() => {
		const logoType = typeof logo;
		switch (logoType) {
			case 'string':
				return (
					<DefaultLogo
						src={logo}
						sx={{ mr: 2.5, maxWidth: !isNavHorizontal ? 80 : 'none' }}
					/>
				);
			case 'function':
				const CustomLogo = logo;
				return (
					<CustomLogo
						sx={{ mr: 2.5, maxWidth: !isNavHorizontal ? 80 : 'none' }}
					/>
				);
			default:
				return undefined;
		}
	}, [logo, isNavHorizontal]);

	if (isLoading) return null;

	const renderContent = (
		<>
			{isDesktop && isNavHorizontal && Logo && React.cloneElement(Logo)}
			{!isDesktop && (
				<IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
					<Iconify icon="eva:menu-2-fill" />
				</IconButton>
			)}
			<Stack
				flexGrow={1}
				direction="row"
				alignItems="center"
				justifyContent="flex-end"
				spacing={{ xs: 0.5, sm: 1.5 }}
			>
				{children}
				<LoadingIndicator
					sx={{
						color: 'text.secondary'
					}}
				/>
				<NotificationsMenu identity={identity} />
				<UserMenu identity={identity} />
			</Stack>
		</>
	);

	return (
		<MuiAppBar
			sx={{
				boxShadow: 'none',
				height: HEADER.H_MOBILE,
				zIndex: theme.zIndex.appBar + 1,
				...bgBlur({
					color: theme.palette.background.default
				}),
				transition: theme.transitions.create(['height'], {
					duration: theme.transitions.duration.shorter
				}),
				...(isDesktop && {
					width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
					height: HEADER.H_DASHBOARD_DESKTOP,
					...(isOffset && {
						height: HEADER.H_DASHBOARD_DESKTOP_OFFSET
					}),
					...(isNavHorizontal && {
						width: 1,
						bgcolor: 'background.default',
						height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
						borderBottom: `dashed 1px ${theme.palette.divider}`
					}),
					...(isNavMini && {
						width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`
					})
				})
			}}
		>
			<Toolbar
				sx={{
					height: 1,
					px: { lg: 5 }
				}}
			>
				{renderContent}
			</Toolbar>
		</MuiAppBar>
	);
};

AppBar.propTypes = {
	onOpenNav: PropTypes.func,
	logo: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	userMenu: PropTypes.func,
	notificationsMenu: PropTypes.func
};

export default AppBar;
