import React from "react";

import PropTypes from "prop-types";

import { Stack, Typography } from "@mui/material";

import { Title } from "../crud";
import ActionsMenu from "../mui/ActionsMenu";

const FormHeader = ({ title, actions }) => {
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			mb={5}
		>
			<Typography variant="h4" gutterBottom>
				<Title content={title} />
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
