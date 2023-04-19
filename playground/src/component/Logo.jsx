import React from 'react';

import { Logo as FobLogo } from 'ra-friendsofbabba';

import logo from '../assets/img/logo.png';

// Used in AppBar and SidebarHorizontal of Layout
const Logo = ({ sx }) => {
	return <FobLogo src={logo} sx={{ ...sx, width: 50 }} />;
};

export default Logo