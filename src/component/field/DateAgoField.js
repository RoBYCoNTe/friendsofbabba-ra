import React, {
  Fragment,
  useMemo,
} from 'react';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  DateField,
  useLocale,
  useRecordContext,
} from 'react-admin';

import { Typography } from '@mui/material';

dayjs.extend(relativeTime);

const DateAgoField = (props) => {
	const record = useRecordContext(props);
	const locale = useLocale();
	const fromNow = useMemo(
		() => dayjs(record?.created).locale(locale).fromNow(),
		[record?.created, locale]
	);
	return (
		<Fragment>
			<DateField record={record} source="created" showTime />
			<br />
			<Typography variant="body2">{fromNow}</Typography>
		</Fragment>
	);
};
export default DateAgoField;
