import React from "react";

import PropTypes from "prop-types";
import { useTranslate } from "react-admin";

import { List, Stack } from "@mui/material";

import useMenu from "../../../hook/useMenu";
import MenuVerticalList from "./MenuVerticalList";
import { StyledVerticalSubheader } from "./styles";

const MenuVertical = ({ sx, groups = [], ...other }) => {
	const translate = useTranslate();
	const { menu, isLoading } = useMenu({ menuGroups: groups });

	if (isLoading) {
		return null;
	}

	if (!menu || menu.length === 0) {
		return null;
	}

	return (
		<Stack sx={sx} {...other}>
			{menu.map((item) => {
				const key = item.group;
				return (
					<List key={key} disablePadding sx={{ px: 2 }}>
						<StyledVerticalSubheader disableSticky>
							{translate(`menu.groups.${item.group}`)}
						</StyledVerticalSubheader>
						{item.resources.map((resource) => (
							<MenuVerticalList
								key={resource.name}
								data={resource}
								depth={1}
								hasChild={!!resource.options.children}
							/>
						))}
					</List>
				);
			})}
		</Stack>
	);
};

MenuVertical.propTypes = {
	data: PropTypes.array,
	groups: PropTypes.array,
	sx: PropTypes.object,
};

export default MenuVertical;
