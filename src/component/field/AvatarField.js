import React from 'react';

import { ImageField } from 'react-admin';

const AvatarField = ({ ...props }) => {
	return (
		<ImageField
			{...props}
			// source={source}
			sx={{
				display: 'flex',
				// justifyContent: 'center',
				'& img': {
					borderRadius: '50%',
					width: '50px !important',
					height: '50px !important',
					objectFit: 'cover !important'
				}
			}}
		/>
	);
};
export default AvatarField;
