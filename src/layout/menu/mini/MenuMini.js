import { Box, Stack } from '@mui/material';
import React, { Fragment, memo } from 'react';

import MenuMiniList from './MenuMiniList';
import PropTypes from 'prop-types';
import useMenu from '../../../hook/useMenu';

const MenuMini = ({ sx, menuGroups, ...other }) => {
	const { menu, isLoading } = useMenu({ menuGroups });

	if (isLoading) {
		return null;
	}

	return (
		<Stack
			spacing={0.5}
			alignItems="center"
			sx={{
				px: 0.75,
				...sx
			}}
			{...other}
		>
			{menu.map((item, index) => {
				const key = item.group;
				return (
					<Fragment key={key}>
						{item.resources.map((resource) => (
							<Fragment key={resource.name}>
								<MenuMiniList
									data={resource}
									depth={1}
									hasChild={!!resource.options.children}
								/>
							</Fragment>
						))}
						{index < menu.length - 1 && (
							<Box
								sx={{
									width: 24,
									height: '1px',
									bgcolor: 'divider',
									my: '8px !important'
								}}
							/>
						)}
					</Fragment>
				);
			})}
		</Stack>
	);
};

MenuMini.propTypes = {
	sx: PropTypes.object
};

export default memo(MenuMini);
