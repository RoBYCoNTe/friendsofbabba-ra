import React from "react";

import { CreateButton, useTranslate } from "react-admin";

import { Stack, Typography } from "@mui/material";

const ListHeader = ({ title, hasCreate }) => {
	const translate = useTranslate();
	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			mb={5}
		>
			<Typography variant="h4" gutterBottom>
				{translate(title, 0)}
			</Typography>
			{hasCreate && <CreateButton variant="contained" size="medium" />}
		</Stack>
	);
};

export default ListHeader;
