import React from "react";

import { FormHelperText } from "@mui/material";

const ValidationError = ({ submitError }) =>
	(submitError && typeof submitError === "string" && (
		<FormHelperText
			error
			sx={(theme) => ({
				padding: theme.spacing(1),
			})}
			dangerouslySetInnerHTML={{ __html: submitError }}
		/>
	)) ||
	null;

export default ValidationError;
