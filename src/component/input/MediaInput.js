import React, {
  Fragment,
  useCallback,
} from 'react';

import {
  FileInput,
  InputHelperText,
  Labeled,
  useNotify,
  useRecordContext,
} from 'react-admin';

import {
  FormHelperText,
  Typography,
} from '@mui/material';

import MediaField from '../field/MediaField';

const MediaInput = ({
	title,
	disabled,
	empty = "Empty",
	FieldComponent = MediaField,
	...props
}) => {
	const record = useRecordContext();
	const notify = useNotify();
	const handleRejection = useCallback(
		() =>
			props?.multiple
				? notify("ra.message.files_rejected", { type: "error" })
				: notify("ra.message.file_rejected", { type: "error" }),
		[props?.multiple, notify]
	);
	if (disabled) {
		const value = record?.[props?.source];
		const files = value ? (Array.isArray(value) ? value : [value]) : [];

		return (
			<Labeled {...props}>
				<Fragment>
					{files.map((file, index) => (
						<FieldComponent
							key={index}
							record={file}
							source="filepath"
							title={title}
							disabled={disabled}
						/>
					))}
					{files.length === 0 && disabled && empty && (
						<Typography
							key="empty"
							variant="body2"
							sx={(theme) => ({
								padding: theme.spacing(2),
								paddingTop: theme.spacing(0.5),
								paddingBottom: theme.spacing(0.5),
							})}
							dangerouslySetInnerHTML={{ __html: empty }}
						/>
					)}
					<FormHelperText>
						<InputHelperText
							touched={false}
							error={false}
							helperText={props.helperText}
						/>
					</FormHelperText>
				</Fragment>
			</Labeled>
		);
	}
	return (
		<FileInput
			{...props}
			options={{
				onDropRejected: handleRejection,
				...props?.options,
			}}
		>
			<FieldComponent source="filepath" title={title} />
		</FileInput>
	);
};

export default MediaInput;
