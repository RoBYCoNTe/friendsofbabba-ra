import React from 'react';

import { useTranslate } from 'react-admin';

import { Typography } from '@mui/material';

const SorryMessage = ({ sorryText }) => {
	const translate = useTranslate();
	return React.isValidElement(sorryText) ? (
		React.cloneElement(sorryText, { key: "sorry" })
	) : (
		<Typography
			sx={(theme) => ({
				padding: theme.spacing(2),
				paddingTop: 0,
				paddingBottom: 1,
			})}
			key="sorry"
			variant="body2"
		>
			{translate(sorryText)}
		</Typography>
	);
};
export default SorryMessage;
