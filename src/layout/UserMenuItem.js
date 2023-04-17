import React from "react";

import { MenuItem } from "@mui/material";

const UserMenuItem = ({ children, ...props }) => {
	return (
		<MenuItem sx={{ m: 1 }} {...props}>
			{children}
		</MenuItem>
	);
};

export default UserMenuItem;
