import React from "react";

import { useTranslate } from "react-admin";

import { Typography } from "@mui/material";

const EmptyMessage = ({ emptyText }) => {
	const translate = useTranslate();
	return React.isValidElement(emptyText) ? (
		React.cloneElement(emptyText, { key: "empty" })
	) : (
		<Typography
			sx={(theme) => ({
				padding: theme.spacing(2),
				paddingTop: theme.spacing(0.5),
				paddingBottom: theme.spacing(0.5),
			})}
			key="empty"
			variant="body2"
		>
			{translate(emptyText)}
		</Typography>
	);
};
export default EmptyMessage;
