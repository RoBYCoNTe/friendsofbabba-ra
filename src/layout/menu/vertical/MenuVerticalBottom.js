import React from 'react';

import {
  useLogout,
  useTranslate,
} from 'react-admin';

import { Logout } from '@mui/icons-material';
import {
  Box,
  Button,
  Stack,
} from '@mui/material';

const MenuVerticalBottom = () => {
	const translate = useTranslate();
	const logout = useLogout();
	return (
		<Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
			<Stack
				alignItems="center"
				spacing={3}
				sx={{ pt: 5, borderRadius: 2, position: "relative" }}
			>
				<Button onClick={logout} color="error" variant="contained">
					<Logout fontSize="small" sx={{ mr: 0.5 }} />
					{translate("ra.auth.logout")}
				</Button>
			</Stack>
		</Box>
	);
};

export default MenuVerticalBottom;
