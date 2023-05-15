import { Box, Typography } from '@mui/material';
import React, { Fragment, useCallback, useMemo } from 'react';
import {
	useLocaleState,
	useNotify,
	useRecordContext,
	useRedirect,
	useResourceContext,
	useTranslate,
	useUpdate
} from 'react-admin';

import dayjs from 'dayjs';

const NotificationField = (props) => {
	const record = useRecordContext(props);
	const resource = useResourceContext(props);
	const redirect = useRedirect();
	const notify = useNotify();
	const translate = useTranslate();
	const locale = useLocaleState();
	const readed = useMemo(
		() =>
			record?.readed
				? dayjs(record?.readed)
						.locale(locale)
						.format('ddd, DD MMM YYYY HH:mm:ss')
				: false,
		[record?.readed, locale]
	);

	const [update] = useUpdate(
		resource,
		{
			id: record?.id,
			data: {
				...record,
				readed: dayjs().format('YYYY-MM-DD HH:mm:ss')
			}
		},
		{
			onSuccess: () => {
				if (record?.resource) {
					if (record?.resource.startsWith('/')) {
						redirect(record?.resource);
					} else {
						document.location.href = record?.resource;
					}
				}
			},
			onFailure: () => {
				notify('resources.notifications.messages.readed.error', 'warning');
			}
		}
	);
	const handleUpdate = useCallback(() => update(), [update]);

	return (
		<div onClick={handleUpdate} style={{ cursor: 'pointer' }}>
			<Typography variant="subtitle1">
				<Box fontWeight={'bold'}> {record?.title}</Box>
			</Typography>
			<Typography
				variant="body1"
				sx={{
					overflow: 'hidden',
					textOverflow: 'ellipsis',
					display: '-webkit-box',
					WebkitBoxOrient: 'vertical',
					whiteSpace: 'break-spaces'
				}}
				dangerouslySetInnerHTML={{ __html: record?.content }}
			/>
			{readed && (
				<Typography
					variant="caption"
					display="block"
					sx={{ mt: 1 }}
					color="textSecondary"
				>
					{translate('resources.notifications.readed', { readed })}
				</Typography>
			)}
		</div>
	);
};
export default NotificationField;
