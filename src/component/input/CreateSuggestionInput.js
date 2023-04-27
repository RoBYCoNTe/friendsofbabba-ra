import * as React from 'react';

import {
  SaveButton,
  Toolbar,
  useCreate,
  useCreateSuggestionContext,
  useTranslate,
} from 'react-admin';

import { Add } from '@mui/icons-material';
import {
  Box,
  Button,
  Drawer,
  Stack,
  TextField,
} from '@mui/material';

const CreateSuggestionInput = ({ resource, source = 'name' }) => {
	const translate = useTranslate();
	const { filter, onCancel, onCreate } = useCreateSuggestionContext();
	const [create] = useCreate();
	const [value, setValue] = React.useState(filter || '');
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
		create(
			resource,
			{ data: { [source]: value } },
			{
				onSuccess: (data) => {
					onCreate(data);
					setLoading(false);
				}
			}
		);
	};

	return (
		<Drawer
			open
			onClose={onCancel}
			anchor="right"
			sx={{
				zIndex: 1211
			}}
		>
			<form onSubmit={handleSubmit}>
				<Stack
					direction="column"
					justifyContent="space-between"
					alignItems="stretch"
					spacing={5}
					sx={{
						height: '100vh',
						minWidth: 350,
						maxWidth: '100%'
					}}
				>
					<Box sx={{ padding: 3 }}>
						<TextField
							label={translate(`resources.${resource}.fields.${source}`)}
							value={value}
							onChange={(event) => setValue(event.target.value)}
							autoFocus
							size="small"
							sx={{ width: '100%' }}
						/>
					</Box>
					<Toolbar>
						<Stack
							justifyContent="space-between"
							direction="row"
							sx={{ width: '100%' }}
						>
							<SaveButton
								type="submit"
								disabled={loading || !value}
								alwaysEnable={!loading && value}
								label="ra.action.create"
								icon={<Add />}
							/>
							<Button onClick={onCancel}>
								{translate('ra.action.cancel')}
							</Button>
						</Stack>
					</Toolbar>
				</Stack>
			</form>
		</Drawer>
	);
};

export default CreateSuggestionInput;
