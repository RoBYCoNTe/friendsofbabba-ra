import { ImageField, useRecordContext } from 'react-admin';
import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import { get } from 'lodash';

const CoverField = ({
	width: defaultWidth = 150,
	height: defaultHeight = 150,
	circle: defaultCircle = false,
	justify: defaultJustify = 'flex-start',
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
	const record = useRecordContext(props);
	const sourceValue = get(record, props.source);
	if (!sourceValue) {
		return null;
	}
	return (
		<ImageField
			sx={(theme) => ({
				margin: 0,
				display: 'flex',
				justifyContent: defaultJustify,
				'& img': {
					margin: '0px !important',
					border: `1px solid ${theme.palette.divider}`,
					objectFit: 'cover !important',
					...sx,
					minWidth: sx.width,
					minHeight: sx.height
				}
			})}
			{...props}
		/>
	);
};

CoverField.propTypes = {
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	circle: PropTypes.bool,
	justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end'])
};

export default CoverField;
