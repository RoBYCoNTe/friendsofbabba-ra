import React, {
  useEffect,
  useState,
} from 'react';

import PropTypes from 'prop-types';
import { SkipNavigationButton } from 'react-admin';

import { styled } from '@mui/material';

import { useFobContext } from '../context';
import DefaultAppBar from './AppBar';
import { HEADER } from './config';
import useResponsive from './hooks/useResponsive';
import DefaultLayoutView from './LayoutView';
import DefaultMenuHorizontal from './menu/horizontal/MenuHorizontal';
import DefaultMenuMini from './menu/mini/MenuMini';
import DefaultMenu from './menu/vertical/MenuVertical';
import DefaultMenuBottom from './menu/vertical/MenuVerticalBottom';
import DefaultSidebar from './Sidebar';
import DefaultSidebarHorizontal from './SidebarHorizontal';
import DefaultSidebarMini from './SidebarMini';

const StyledRoot = styled('div')(({ theme, horizontal }) => ({
	display: 'flex',
	minHeight: '100%',
	overflow: 'hidden',
	paddingTop: horizontal && HEADER.H_MOBILE
}));

const Layout = ({ children, ...props }) => {
	const {
		error: errorComponent,
		menuGroups = [],
		menu: Menu = DefaultMenu,
		menuBottom: MenuBottom = DefaultMenuBottom,
		menuMini: MenuMini = DefaultMenuMini,
		menuHorizontal: MenuHorizontal = DefaultMenuHorizontal,
		appBar: AppBar = DefaultAppBar,
		sidebar: Sidebar = DefaultSidebar,
		sidebarMini: SidebarMini = DefaultSidebarMini,
		sidebarHorizontal: SidebarHorizontal = DefaultSidebarHorizontal,
		layoutView: LayoutView = DefaultLayoutView,
		logo,
		logoMini,
		title,
		themeLayout: initialThemeLayout,
		themeStretch: initialThemeStretch,
		...rest
	} = props;
	const [open, setOpen] = useState(false);
	const { themeLayout, setThemeLayout, setThemeStretch } = useFobContext();
	const isDesktop = useResponsive('up', 'lg');
	const isSidebarHorizontal = themeLayout === 'horizontal';
	const isSidebarMini = themeLayout === 'mini';
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const renderSidebar = (
		<Sidebar
			openNav={open}
			onCloseNav={handleClose}
			menu={Menu}
			menuBottom={MenuBottom}
			menuGroups={menuGroups}
			logo={logo}
		/>
	);

	useEffect(() => {
		if (initialThemeLayout === 'horizontal') {
			setThemeLayout(initialThemeLayout);
		} else {
			// Vertical or Mini
			if (themeLayout !== 'mini') {
				setThemeLayout('vertical');
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialThemeLayout]);

	useEffect(() => {
		setThemeStretch(initialThemeStretch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialThemeStretch]);

	if (isSidebarHorizontal) {
		return (
			<StyledRoot {...rest} horizontal={isSidebarHorizontal && isDesktop}>
				<SkipNavigationButton />
				<AppBar onOpenNav={handleOpen} logo={logo} />
				{isDesktop ? (
					<SidebarHorizontal menu={MenuHorizontal} menuGroups={menuGroups} />
				) : (
					renderSidebar
				)}
				<LayoutView errorComponent={errorComponent} title={title}>
					{children}
				</LayoutView>
			</StyledRoot>
		);
	}

	if (isSidebarMini) {
		return (
			<StyledRoot {...rest}>
				<SkipNavigationButton />
				<AppBar onOpenNav={handleOpen} logo={logo} />
				{isDesktop ? (
					<SidebarMini
						menu={MenuMini}
						menuGroups={menuGroups}
						logo={logoMini}
					/>
				) : (
					renderSidebar
				)}
				<LayoutView errorComponent={errorComponent} title={title}>
					{children}
				</LayoutView>
			</StyledRoot>
		);
	}

	return (
		<StyledRoot {...rest}>
			<SkipNavigationButton />
			<AppBar onOpenNav={handleOpen} logo={logo} />
			{renderSidebar}
			<LayoutView errorComponent={errorComponent} title={title}>
				{children}
			</LayoutView>
		</StyledRoot>
	);
};

Layout.propTypes = {
	menu: PropTypes.func,
	menuBottom: PropTypes.func,
	menuMini: PropTypes.func,
	menuHorizontal: PropTypes.func,
	menuGroups: PropTypes.array,
	appBar: PropTypes.func,
	sidebar: PropTypes.func,
	sidebarMini: PropTypes.func,
	layoutView: PropTypes.func,
	logo: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	logoMini: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	themeLayout: PropTypes.oneOf(['vertical', 'horizontal']),
	themeStretch: PropTypes.bool
};

export default Layout;
