import React from 'react';

import PropTypes from 'prop-types';
import {
  useRecordContext,
  useTranslate,
} from 'react-admin';

import {
  Stack,
  Typography,
} from '@mui/material';

import ActionsMenu from '../mui/ActionsMenu';

const FormHeader = ({ title, actions }) => {
	const translate = useTranslate();
	const record = useRecordContext();
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			mb={5}
		>
			<Typography variant="h4" gutterBottom>
				{translate(title, { ...record })}
			</Typography>
			<ActionsMenu actions={actions} />
		</Stack>
	);
};

FormHeader.propTypes = {
	title: PropTypes.string.isRequired,
	actions: PropTypes.arrayOf(PropTypes.element),
};

FormHeader.defaultProps = {
	actions: [],
};

export default FormHeader;
