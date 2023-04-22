import React, { useMemo } from 'react';

import { ImageField } from 'react-admin';

const CoverField = ({
	width: defaultWidth = 150,
	height: defaultHeight = 150,
	circle: defaultCircle = false,
	...props
}) => {
	const sx = useMemo(
		() => ({
			width:
				typeof defaultWidth === 'number'
					? `${defaultWidth}px !important`
					: `${defaultWidth} !important`,
			height:
				typeof defaultHeight === 'number'
					? `${defaultHeight}px !important`
					: `${defaultHeight} !important`,
			borderRadius: defaultCircle ? '50%' : 1.5
		}),
		[defaultWidth, defaultHeight, defaultCircle]
	);

	return (
		<ImageField
			sx={(theme) => ({
				margin: 0,
				display: 'flex',
				justifyContent: 'center',
				'& img': {
					margin: '0px !important',
					border: `1px solid ${theme.palette.divider}`,
					objectFit: 'cover !important',
					...sx
				}
			})}
			{...props}
		/>
	);
};
export default CoverField;
