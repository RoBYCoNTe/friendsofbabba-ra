import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { TextInput } from 'react-admin';
import * as ReactColor from 'react-color';

import {
  Box,
  InputAdornment,
  TextField,
} from '@mui/material';

import useCustomInput from './useCustomInput';

const ColorInput = ({ components, ...props }) => {
	const [show, setShow] = useState(false);
	const { id, field, fieldProps } = useCustomInput({
		...props
	});
	const { options, picker = 'Chrome' } = props;

	const handleOpen = () => setShow(true);
	const handleClose = () => setShow(false);
	const handleChange = ({ hex }) => field.onChange(hex);

	const Picker = ReactColor[`${picker}Picker`];

	return (
		<div>
			<TextField
				id={id}
				{...field}
				{...fieldProps}
				onFocus={handleOpen}
				InputProps={{
					endAdornment: field.value && (
						<InputAdornment position="start">
							<Box
								sx={{
									width: 15,
									height: 15,
									borderRadius: 7.5,
									backgroundColor: field.value
								}}
							/>
						</InputAdornment>
					)
				}}
			/>
			{show ? (
				<Box className="ColorInput-popup">
					{/* eslint-disable-next-line */}
					<Box
						className="ColorInput-cover"
						onClick={handleClose}
						sx={{
							position: 'fixed',
							top: 0,
							right: 0,
							bottom: 0,
							left: 0
						}}
					/>
					<Picker {...options} color={field.value} onChange={handleChange} />
				</Box>
			) : null}
		</div>
	);
};

ColorInput.defaultProps = {
	picker: 'Chrome'
};

ColorInput.propTypes = {
	...TextInput.propTypes,
	picker: PropTypes.oneOf([
		'Alpha',
		'Block',
		'Check',
		'Chrome',
		'Circle',
		'Compact',
		'Github',
		'Hue',
		'Material',
		'Photoshop',
		'Sketch',
		'Slider',
		'Swatches',
		'Twitter',
		'Custom'
	])
};

export default ColorInput;
