import React, { useMemo } from "react";

import PropTypes from "prop-types";
import { CloneButton, DeleteWithConfirmButton, EditButton } from "react-admin";

import ActionsMenu from "../mui/ActionsMenu";

const ActionsField = ({ canEdit, canDelete, canClone }) => {
	const actions = useMemo(() => {
		let _actions = [];
		if (canEdit) {
			_actions.push(<EditButton />);
		}
		if (canDelete) {
			_actions.push(<DeleteWithConfirmButton />);
		}
		if (canClone) {
			_actions.push(<CloneButton />);
		}
		return _actions;
	}, [canEdit, canDelete, canClone]);

	if (!canEdit && !canDelete && !canClone) {
		return null;
	}

	return <ActionsMenu actions={actions} />;
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
