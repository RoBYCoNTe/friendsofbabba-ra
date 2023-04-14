import React, { Fragment } from 'react';

import { Stack } from '@mui/material';

import { useMenu } from '../../../hook';
import { hideScrollbarY } from '../../utils/cssStyles';
import MenuHorizontalList from './MenuHorizontalList';

const MenuHorizontal = ({ sx, ...other }) => {
	const { menu, isLoading } = useMenu();
	if (isLoading) {
		return null;
	}

	return (
		<Stack
			direction="row"
			spacing={1}
			sx={{
				mx: "auto",
				...hideScrollbarY,
				...sx,
			}}
			{...other}
		>
			{menu.map((item, index) => {
				const key = item.group;
				return (
					<Fragment key={key} disablePadding sx={{ px: 2 }}>
						{item.resources.map((resource) => (
							<Fragment key={resource.name}>
								<MenuHorizontalList
									data={resource}
									depth={1}
									hasChild={!!resource.options.children}
								/>
							</Fragment>
						))}
					</Fragment>
				);
			})}
		</Stack>
	);
};

export default MenuHorizontal;
