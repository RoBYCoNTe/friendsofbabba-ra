import React from 'react';

import PropTypes from 'prop-types';

import { IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useFobContext } from '../context/FobContext';
import { NAV } from './config';
import useResponsive from './hooks/useResponsive';
import Iconify from './Iconify';
import { bgBlur } from './utils/cssStyles';

const SidebarToggleButton = ({ sx, ...other }) => {
	const theme = useTheme();
	const isDesktop = useResponsive('up', 'lg');
	const { onToggleLayout, themeLayout } = useFobContext();

	if (!isDesktop) {
		return null;
	}

	return (
		<IconButton
			size="small"
			onClick={onToggleLayout}
			sx={{
				p: 0.5,
				top: 32,
				position: 'fixed',
				left: NAV.W_DASHBOARD - 12,
				zIndex: theme.zIndex.drawer + 10,
				border: `dashed 1px ${theme.palette.divider}`,
				...bgBlur({ opacity: 0.48, color: theme.palette.background.default }),
				'&:hover': {
					bgcolor: 'background.default'
				},
				...sx
			}}
			{...other}
		>
			<Iconify
				width={16}
				icon={
					themeLayout === 'vertical'
						? 'eva:arrow-ios-back-fill'
						: 'eva:arrow-ios-forward-fill'
				}
			/>
		</IconButton>
	);
};

SidebarToggleButton.propTypes = {
	sx: PropTypes.object
};

export default SidebarToggleButton;
