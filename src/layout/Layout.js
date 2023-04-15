import React, { useState } from 'react';

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

const StyledRoot = styled("div")(({ theme, horizontal }) => ({
	display: "flex",
	minHeight: "100%",
	overflow: "hidden",
	paddingTop: horizontal && HEADER.H_MOBILE,
}));

const Layout = ({ children, ...props }) => {
	const {
		error: errorComponent,
		menu: Menu = DefaultMenu,
		menuBottom: MenuBottom = DefaultMenuBottom,
		menuMini: MenuMini = DefaultMenuMini,
		menuHorizontal: MenuHorizontal = DefaultMenuHorizontal,
		appBar: AppBar = DefaultAppBar,
		sidebar: Sidebar = DefaultSidebar,
		sidebarMini: SidebarMini = DefaultSidebarMini,
		sidebarHorizontal: SidebarHorizontal = DefaultSidebarHorizontal,
		layoutView: LayoutView = DefaultLayoutView,
		title,
		...rest
	} = props;
	const [open, setOpen] = useState(false);
	const { themeLayout } = useFobContext();
	const isDesktop = useResponsive("up", "lg");
	const isNavHorizontal = themeLayout === "horizontal";
	const isNavMini = themeLayout === "mini";
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const renderNavVertical = (
		<Sidebar
			openNav={open}
			onCloseNav={handleClose}
			menu={Menu}
			menuBottom={MenuBottom}
		/>
	);

	if (isNavHorizontal) {
		return (
			<StyledRoot {...rest} horizontal={isNavHorizontal && isDesktop}>
				<SkipNavigationButton />
				<AppBar onOpenNav={handleOpen} />
				{isDesktop ? (
					<SidebarHorizontal menu={MenuHorizontal} />
				) : (
					renderNavVertical
				)}
				<LayoutView errorComponent={errorComponent} title={title}>
					{children}
				</LayoutView>
			</StyledRoot>
		);
	}

	if (isNavMini) {
		return (
			<StyledRoot {...rest}>
				<SkipNavigationButton />
				<AppBar onOpenNav={handleOpen} />
				{isDesktop ? <SidebarMini menu={MenuMini} /> : renderNavVertical}
				<LayoutView errorComponent={errorComponent} title={title}>
					{children}
				</LayoutView>
			</StyledRoot>
		);
	}

	return (
		<StyledRoot {...rest}>
			<SkipNavigationButton />
			<AppBar onOpenNav={() => setOpen(true)} />
			<Sidebar
				openNav={open}
				onCloseNav={handleClose}
				menu={Menu}
				menuBottom={MenuBottom}
			/>
			<LayoutView errorComponent={errorComponent} title={title}>
				{children}
			</LayoutView>
		</StyledRoot>
	);
};

Layout.propTypes = {
	menu: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	menuBottom: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	menuMini: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	menuHorizontal: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	appBar: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	sidebar: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	sidebarMini: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	layoutView: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
};

export default Layout;
