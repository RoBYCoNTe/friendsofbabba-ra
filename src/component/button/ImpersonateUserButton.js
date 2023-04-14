import React, {
  useCallback,
  useState,
} from 'react';

import {
  Button,
  useRecordContext,
} from 'react-admin';

import { VpnKey } from '@mui/icons-material';

import { useDoImpersonate } from '../../data/createAuthProvider';

const ImpersonateUserButton = ({ label = "ra.auth.sign_in", ...rest }) => {
	const record = useRecordContext();
	const [loading, setLoading] = useState(false);
	const doImpersonate = useDoImpersonate(record?.id);
	const handleClick = useCallback(
		(e) => {
			e.stopPropagation();
			e.preventDefault();
			setLoading(true);
			doImpersonate().then(() => setLoading(false));
		},
		[doImpersonate, setLoading]
	);
	return (
		<Button
			disabled={loading}
			color="primary"
			variant="text"
			label={label}
			onClick={handleClick}
			{...rest}
		>
			<VpnKey />
		</Button>
	);
};

export default ImpersonateUserButton;
