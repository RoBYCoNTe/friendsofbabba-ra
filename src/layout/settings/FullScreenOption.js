import React, { useCallback, useState } from 'react';

import { useTranslate } from 'react-admin';

import { alpha, Box, ButtonBase } from '@mui/material';

import Iconify from '../Iconify';

const FullScreenOption = () => {
	const translate = useTranslate();
	const [fullscreen, setFullscreen] = useState(false);
	const onToggleFullScreen = useCallback(() => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setFullscreen(true);
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
			setFullscreen(false);
		}
	}, []);

	return (
		<Box sx={{ p: 2.5 }}>
			<ButtonBase
				onClick={onToggleFullScreen}
				sx={{
					width: 1,
					height: 48,
					borderRadius: 1,
					color: 'text.disabled',
					typography: 'subtitle2',
					border: (theme) =>
						`solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
					...(fullscreen && {
						color: 'text.primary'
					}),
					'& svg': {
						...(fullscreen && {
							color: (theme) =>
								`linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`
						})
					}
				}}
			>
				<Iconify
					icon={fullscreen ? 'cil:fullscreen-exit' : 'cil:fullscreen'}
					sx={{ width: 16, height: 16, mr: 1 }}
				/>
				{fullscreen
					? translate('ra.theme.settings.fullscreen_exit', {
							_: 'Exit Fullscreen'
					  })
					: translate('ra.theme.settings.fullscreen', {
							_: 'Fullscreen'
					  })}
			</ButtonBase>
		</Box>
	);
};

export default FullScreenOption;
