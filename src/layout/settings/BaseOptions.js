import React from 'react';

import PropTypes from 'prop-types';

import { alpha, ButtonBase, Stack } from '@mui/material';

import Iconify from '../Iconify';

const BaseOptions = ({ icons, options, value, onChange }) => {
	return (
		<Stack direction="row" spacing={2}>
			{options.map((option, index) => {
				const selected = value === option;
				return (
					<ButtonBase
						key={option}
						onClick={() => onChange(option)}
						sx={{
							width: 1,
							height: 80,
							borderRadius: 1,
							border: (theme) =>
								`solid 1px ${alpha(theme.palette.grey[500], 0.08)}`,
							...(selected && {
								bgcolor: 'background.paper',
								boxShadow: (theme) =>
									`-24px 8px 24px -4px ${alpha(
										theme.palette.mode === 'light'
											? theme.palette.grey[500]
											: theme.palette.common.black,
										0.08
									)}`
							}),
							'& svg': {
								color: (theme) => theme.palette.text.disabled,
								...(selected && {
									color: (theme) => theme.palette.primary.main
								})
							}
						}}
					>
						<Iconify icon={icons?.[index] || icons[0]} />
					</ButtonBase>
				);
			})}
		</Stack>
	);
};

BaseOptions.propTypes = {
	icons: PropTypes.arrayOf(PropTypes.string),
	onChange: PropTypes.func,
	options: PropTypes.array,
	value: PropTypes.string
};

export default BaseOptions;
