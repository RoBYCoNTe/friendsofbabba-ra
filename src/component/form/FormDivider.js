import React from 'react';

import { useTranslate } from 'react-admin';

import {
  Divider,
  Typography,
} from '@mui/material';

const FormDivider = ({ label, first, ...props }) => {
	const translate = useTranslate();
	return (
		<>
			{label && (
				<Typography
					variant="overline"
					component="p"
					gutterBottom
					sx={{
						fontWeight: 'bold',
						marginTop: first ? 0 : 2.5,
						marginBottom: 0.5
					}}
				>
					{translate(label)}
				</Typography>
			)}
			<Divider
				sx={{
					marginTop: 0,
					marginBottom: 2.5,
					marginLeft: 'auto',
					marginRight: 'auto'
				}}
			/>
		</>
	);
};

export default FormDivider;
