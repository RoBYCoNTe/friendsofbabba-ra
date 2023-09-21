import React from 'react';

import PropTypes from 'prop-types';

import {
  Badge,
  badgeClasses,
  Box,
  IconButton,
} from '@mui/material';

import { useFobContext } from '../../context/FobContext';
import Iconify from '../Iconify';

const SettingsButton = ({ sx }) => {
	const { onToggleSettings } = useFobContext();

	return (
		<Badge
			color="error"
			variant="dot"
			invisible={true}
			sx={{
				[`& .${badgeClasses.badge}`]: {
					top: 8,
					right: 8
				},
				...sx
			}}
		>
			<Box>
				<IconButton
					aria-label="settings"
					onClick={onToggleSettings}
					sx={{
						width: 40,
						height: 40
					}}
				>
					<Iconify icon="solar:settings-bold-duotone" width={24} />
				</IconButton>
			</Box>
		</Badge>
	);
};

SettingsButton.propTypes = {
	sx: PropTypes.object
};

export default SettingsButton;
