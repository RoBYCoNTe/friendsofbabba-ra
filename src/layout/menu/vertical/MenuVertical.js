import React from 'react';

import PropTypes from 'prop-types';
import { useTranslate } from 'react-admin';

import {
  List,
  Stack,
} from '@mui/material';

import { useFobContext } from '../../../context/FobContext';
import useMenu from '../../../hook/useMenu';
import MenuVerticalList from './MenuVerticalList';
import { StyledVerticalSubheader } from './styles';

const MenuVertical = ({ sx, ...other }) => {
	const translate = useTranslate();
	const { menuGroups } = useFobContext();
	const { menu, isLoading } = useMenu({ groups: menuGroups });

	if (isLoading) {
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
};

export default MenuVertical;
