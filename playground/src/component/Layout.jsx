import React from 'react';

import {
  AppBar as FobAppBar,
  Layout as FobLayout,
  Logo as FobLogo,
  MenuHorizontal as FobMenuHorizontal,
  MenuMini as FobMenuMini,
  MenuVertical as FobMenuVertical,
  MenuVerticalBottom as FobMenuVerticalBottom,
  NotificationsMenu as FobNotificationsMenu,
  Sidebar as FobSidebar,
  SidebarHorizontal as FobSidebarHorizontal,
  SidebarMini as FobSidebarMini,
  UserMenu as FobUserMenu,
  UserMenuItem,
} from 'ra-friendsofbabba';

import { Divider } from '@mui/material';

import logoMini from '../assets/img/logo.png'; // Icon logo
import Logo from './Logo';

// Used in SidebarMini of Layout
const LogoMini = () => {
	return (
		<FobLogo src={logoMini} sx={{ width: 40, mx: "auto", mt: 2, mb: 5 }} />
	);
};

// AppBar customization
const MyUserMenu = (props) => {
	return (
		<FobUserMenu {...props}>
			<Divider sx={{ borderStyle: "dashed" }} />
			<UserMenuItem to="/profile">User Profile</UserMenuItem>
		</FobUserMenu>
	);
};

const MyNotificationsMenu = (props) => {
	return <FobNotificationsMenu {...props} />;
};

const MyAppBar = (props) => (
	<FobAppBar
		{...props}
		userMenu={MyUserMenu}
		notificationsMenu={MyNotificationsMenu}
	/>
);

// Sidebars customization
const MySidebar = (props) => {
	return <FobSidebar {...props} />;
};

const MySidebarHorizontal = (props) => {
	return <FobSidebarHorizontal {...props} />;
};

const MySidebarMini = (props) => {
	return <FobSidebarMini {...props} />;
};

const MyMenu = (props) => {
	return <FobMenuVertical {...props} />;
};

const MyMenuHorizontal = (props) => {
	return <FobMenuHorizontal {...props} />;
};

const MyMenuMini = (props) => {
	return <FobMenuMini {...props} />;
};

const MyMenuBottom = (props) => {
	return <FobMenuVerticalBottom {...props} />;
};

// Customized Layout
const Layout = (props) => {
	return (
		<FobLayout
			{...props}
			logo={Logo}
			logoMini={LogoMini}
			appBar={MyAppBar}
			sidebar={MySidebar}
			sidebarHorizontal={MySidebarHorizontal}
			sidebarMini={MySidebarMini}
			menuGroups={["dashboard", "blog", "admin"]}
			menu={MyMenu}
			menuHorizontal={MyMenuHorizontal}
			menuMini={MyMenuMini}
			menuBottom={MyMenuBottom}
			themeLayout="vertical"
			themeStretch={true}
		/>
	);
};

export default Layout;
