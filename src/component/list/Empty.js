import React from 'react';

import PropTypes from 'prop-types';
import {
  useResourceContext,
  useTranslate,
} from 'react-admin';

import {
  Box,
  Stack,
  Typography,
} from '@mui/material';

import EmptyImage from './EmptyImage';

const Empty = ({ title, description, img, sx, ...props }) => {
	const resource = useResourceContext(props);
	const translate = useTranslate();

	return (
		<Stack
			alignItems="center"
			justifyContent="center"
			sx={{
				height: 1,
				textAlign: "center",
				p: (theme) => theme.spacing(8, 2),
				...sx,
			}}
		>
			{img ? (
				<img
					src={img || EmptyImage}
					alt="empty content"
					style={{ height: 240, marginBottom: 10 }}
				/>
			) : (
				<Box sx={{ marginBottom: 10 }}>
					<EmptyImage height={240} />
				</Box>
			)}
			<Typography variant="h5" gutterBottom>
				{title || translate("ra.navigation.no_results", { resource })}
			</Typography>
			{description && (
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					{description}
				</Typography>
			)}
		</Stack>
	);
};

Empty.propTypes = {
	sx: PropTypes.object,
	img: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
};

export default Empty;
