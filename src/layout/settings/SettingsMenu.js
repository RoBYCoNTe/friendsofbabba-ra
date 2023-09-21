import React from 'react';

import { useTranslate } from 'react-admin';

import {
  Badge,
  Divider,
  Drawer,
  drawerClasses,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import { useFobContext } from '../../context/FobContext';
import Iconify from '../Iconify';
import { Scrollbar } from '../scrollbar';
import BaseOptions from './BaseOptions';
import FullScreenOption from './FullScreenOption';
import LayoutOptions from './LayoutOptions';
import PresetsOptions from './PresetsOptions';
import StretchOptions from './StretchOptions';

const SettingsMenu = () => {
	const translate = useTranslate();
	const {
		settingsOpen,
		onToggleSettings,
		themeMode,
		setThemeMode,
		themeContrast,
		setThemeContrast,
		themeLayout,
		setThemeLayout,
		themeStretch,
		onToggleStretch,
		onResetSettings,
		themeColor,
		setThemeColor,
		presets
	} = useFobContext();

	const labelStyles = {
		mb: 1.5,
		color: 'text.disabled',
		fontWeight: 'fontWeightSemiBold'
	};

	const renderHead = (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			sx={{ py: 2, pr: 1, pl: 2.5 }}
		>
			<Typography variant="h6" sx={{ flexGrow: 1 }}>
				{translate('ra.theme.settings.title', {
					_: 'Settings'
				})}
			</Typography>
			<Tooltip title="Reset">
				<IconButton onClick={onResetSettings}>
					<Badge color="error" variant="dot" invisible={true}>
						<Iconify icon="solar:restart-bold" />
					</Badge>
				</IconButton>
			</Tooltip>
			<IconButton onClick={onToggleSettings}>
				<Iconify icon="mingcute:close-line" />
			</IconButton>
		</Stack>
	);

	const renderMode = (
		<div>
			<Typography variant="caption" component="div" sx={{ ...labelStyles }}>
				{translate('ra.theme.settings.mode', {
					_: 'Mode'
				})}
			</Typography>
			<BaseOptions
				value={themeMode}
				onChange={(newValue) => setThemeMode(newValue)}
				options={['light', 'dark', 'auto']}
				icons={['ph:sun-duotone', 'radix-icons:moon', 'ic:outline-hdr-auto']}
			/>
		</div>
	);

	const renderContrast = (
		<div>
			<Typography variant="caption" component="div" sx={{ ...labelStyles }}>
				{translate('ra.theme.settings.contrast', {
					_: 'Contrast'
				})}
			</Typography>
			<BaseOptions
				value={themeContrast}
				onChange={(newValue) => setThemeContrast(newValue)}
				options={['default', 'bold']}
				icons={['cil:contrast', 'ic:twotone-contrast']}
			/>
		</div>
	);

	const renderLayout = (
		<div>
			<Typography variant="caption" component="div" sx={{ ...labelStyles }}>
				{translate('ra.theme.settings.layout', {
					_: 'Layout'
				})}
			</Typography>
			<LayoutOptions
				value={themeLayout}
				onChange={(newValue) => setThemeLayout(newValue)}
				options={['vertical', 'horizontal', 'mini']}
			/>
		</div>
	);

	const renderStretch = (
		<div>
			<Typography
				variant="caption"
				component="div"
				sx={{
					...labelStyles,
					display: 'inline-flex',
					alignItems: 'center'
				}}
			>
				{translate('ra.theme.settings.stretch', {
					_: 'Stretch'
				})}
				<Tooltip
					title={translate('ra.theme.settings.title', {
						_: 'Only available at large resolutions > 1600px (xl)'
					})}
				>
					<Iconify icon="eva:info-outline" width={16} sx={{ ml: 0.5 }} />
				</Tooltip>
			</Typography>
			<StretchOptions value={themeStretch} onChange={onToggleStretch} />
		</div>
	);

	const renderPresets = (
		<div>
			<Typography variant="caption" component="div" sx={{ ...labelStyles }}>
				{translate('ra.theme.settings.presets', {
					_: 'Presets'
				})}
			</Typography>
			<PresetsOptions
				value={themeColor}
				onChange={(newValue) => setThemeColor(newValue)}
				presets={presets}
			/>
		</div>
	);

	return (
		<Drawer
			anchor="right"
			open={settingsOpen}
			onClose={onToggleSettings}
			slotProps={{
				backdrop: { invisible: true }
			}}
			sx={{
				[`& .${drawerClasses.paper}`]: {
					width: 280
				}
			}}
		>
			{renderHead}
			<Divider sx={{ borderStyle: 'dashed' }} />
			<Scrollbar>
				<Stack spacing={3} sx={{ p: 3 }}>
					{renderMode}
					{renderContrast}
					{renderLayout}
					{renderStretch}
					{presets && renderPresets}
				</Stack>
			</Scrollbar>
			<FullScreenOption />
		</Drawer>
	);
};

export default SettingsMenu;
