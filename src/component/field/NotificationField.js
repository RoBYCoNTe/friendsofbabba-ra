import React, { Fragment, useMemo } from 'react';

import dayjs from 'dayjs';
import { useLocale, useRecordContext, useTranslate } from 'react-admin';

import { Box, Typography } from '@mui/material';

const NotificationField = (props) => {
	const record = useRecordContext(props);
	const translate = useTranslate();
	const locale = useLocale();
	const readed = useMemo(
		() =>
			record?.readed
				? dayjs(record?.readed)
						.locale(locale)
						.format('ddd, DD MMM YYYY HH:mm:ss')
				: false,
		[record?.readed, locale]
	);

	return (
		<Fragment>
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
		</Fragment>
	);
};
export default NotificationField;
