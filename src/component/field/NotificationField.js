import React, {
  Fragment,
  useMemo,
} from 'react';

import moment from 'moment';
import {
  useRecordContext,
  useTranslate,
} from 'react-admin';

import {
  Box,
  Typography,
} from '@mui/material';

const NotificationField = (props) => {
	const record = useRecordContext(props);
	const translate = useTranslate();
	const readed = useMemo(
		() =>
			record?.readed
				? moment(record?.readed).format(translate("app.date_format.long"))
				: false,
		[record?.readed, translate]
	);

	return (
		<Fragment>
			<Typography variant="subtitle1">
				<Box fontWeight={"bold"}> {record?.title}</Box>
			</Typography>
			<Typography
				variant="body1"
				sx={{
					overflow: "hidden",
					textOverflow: "ellipsis",
					display: "-webkit-box",
					WebkitBoxOrient: "vertical",
					whiteSpace: "break-spaces",
				}}
				dangerouslySetInnerHTML={{ __html: record?.content }}
			/>
			{readed && (
				<Typography variant="caption" display="block">
					{translate("resources.notifications.readed", { readed })}
				</Typography>
			)}
		</Fragment>
	);
};
export default NotificationField;
