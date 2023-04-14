import React, { useState } from 'react';

import {
  Button,
  Confirm,
  useDataProvider,
  useNotify,
  useRecordContext,
  useTranslate,
} from 'react-admin';
import { useMutation } from 'react-query';

import { RotateLeft } from '@mui/icons-material';

/**
 * Button to reset a user's password.
 * This button can be used in list or forms (everywhere a record
 * exists in the list of props).
 *
 * @param {Object} props
 * @param {Object} props.record User's record.
 * @returns  {JSX.Element}
 */
const ResetPasswordButton = () => {
	const record = useRecordContext();
	const notify = useNotify();
	const translate = useTranslate();
	const [open, setOpen] = useState(false);
	const dataProvider = useDataProvider();

	const { mutate: handleConfirm, isLoading } = useMutation(
		() =>
			dataProvider.post("users/reset-password", {
				payload: {
					account: record?.email,
				},
			}),
		{
			onSuccess: () => {
				setOpen(false);
				notify("resources.users.messages.reset_success", "info");
			},
			onFailure: ({ message }) => {
				setOpen(false);
				notify("resources.users.messages.reset_failure", "error");
			},
		}
	);

	const handleClick = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setOpen(true);
	};
	const handleCancel = () => setOpen(false);
	const id = record?.id || 0;
	if (id === 0) {
		return null;
	}

	return (
		<>
			<Confirm
				isOpen={open}
				loading={isLoading}
				title="resources.users.messages.reset_title"
				content="resources.users.messages.reset_content"
				onConfirm={() => handleConfirm()}
				onClose={handleCancel}
			/>
			<Button
				onClick={handleClick}
				color="primary"
				label={translate("resources.users.buttons.reset")}
			>
				<RotateLeft />
			</Button>
		</>
	);
};
export default ResetPasswordButton;
