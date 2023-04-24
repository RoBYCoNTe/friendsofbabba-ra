import React, { useCallback } from 'react';

import { TextInput } from 'react-admin';
import {
  useFormContext,
  useWatch,
} from 'react-hook-form';

import { Refresh } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
} from '@mui/material';

import defaultSlugify from '../../util/slugify';

const validate = (value) => {
	if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
		return 'ra.validation.slug';
	}
	return undefined;
};
const SlugInput = ({ dependency, slugify = defaultSlugify, ...props }) => {
	const { source } = props;
	const { setValue } = useFormContext();
	const valueDependency = useWatch({ name: dependency });

	const handleSlugify = useCallback(() => {
		if (valueDependency) {
			setValue(source, slugify(valueDependency));
		}
	}, [source, valueDependency, slugify, setValue]);

	return (
		<TextInput
			{...props}
			validate={validate}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							aria-label={`generate slug from ${dependency}`}
							onClick={handleSlugify}
						>
							<Refresh />
						</IconButton>
					</InputAdornment>
				)
			}}
		/>
	);
};

export default SlugInput;
