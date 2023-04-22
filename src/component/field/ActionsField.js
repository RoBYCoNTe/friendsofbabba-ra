import React from 'react';

import PropTypes from 'prop-types';
import {
  CloneButton,
  DeleteWithConfirmButton,
  EditButton,
} from 'react-admin';

import ActionsMenu from '../mui/ActionsMenu';

const ActionsField = ({ canEdit, canDelete, canClone }) => {
	if (!canEdit && !canDelete && !canClone) {
		return null;
	}

	return (
		<ActionsMenu>
			{canEdit && <EditButton />}
			{canDelete && <DeleteWithConfirmButton />}
			{canClone && <CloneButton />}
		</ActionsMenu>
	);
};

ActionsField.defaultProps = {
	canEdit: true,
	canDelete: true,
	canClone: false,
};

ActionsField.propTypes = {
	canEdit: PropTypes.bool,
	canDelete: PropTypes.bool,
	canClone: PropTypes.bool,
};

export default ActionsField;
