import React, { Fragment } from 'react';

import MenuHorizontalList from './MenuHorizontalList';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { hideScrollbarY } from '../../utils/cssStyles';
import useMenu from '../../../hook/useMenu';

const MenuHorizontal = ({ sx, groups = [], ...other }) => {
	const { menu, isLoading } = useMenu({ menuGroups: groups });
	if (isLoading) {
		return null;
	}

	if (!menu || menu.length === 0) {
		return null;
	}

	return (
		<Stack
			direction="row"
			spacing={1}
			sx={{
				mx: 'auto',
				...hideScrollbarY,
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

MenuHorizontal.propTypes = {
	sx: PropTypes.object,
	groups: PropTypes.array
};

export default MenuHorizontal;
