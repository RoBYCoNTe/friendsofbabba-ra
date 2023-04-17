import React, { useMemo } from "react";

import PropTypes from "prop-types";

import { Box, Stack } from "@mui/material";

import { NAV } from "./config";
import DefaultLogo from "./Logo";
import DefaultMenu from "./menu/mini/MenuMini";
import SidebarToggleButton from "./SidebarToggleButton";
import { hideScrollbarX } from "./utils/cssStyles";

const SidebarMini = ({ menu: Menu = DefaultMenu, menuGroups = [], logo }) => {
	const Logo = useMemo(() => {
		const logoType = typeof logo;
		switch (logoType) {
			case "string":
				return <DefaultLogo src={logo} />;
			case "function":
				const CustomLogo = logo;
				return <CustomLogo />;
			default:
				return undefined;
		}
	}, [logo]);

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
				{Logo && React.cloneElement(Logo)}
				<Menu />
			</Stack>
		</Box>
	);
};

SidebarMini.propTypes = {
	menu: PropTypes.func,
	menuGroups: PropTypes.array,
	logo: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default SidebarMini;
