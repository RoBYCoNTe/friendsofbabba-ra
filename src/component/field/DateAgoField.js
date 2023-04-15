import React, {
  Fragment,
  useMemo,
} from 'react';

import moment from 'moment';
import {
  DateField,
  useLocale,
  useRecordContext,
} from 'react-admin';

import { Typography } from '@mui/material';

const DateAgoField = () => {
	const record = useRecordContext();
	const locale = useLocale();
	const fromNow = useMemo(() => {
		moment.locale(locale);
		return moment(record?.created).fromNow();
	}, [record?.created, locale]);
	return (
		<Fragment>
			<DateField record={record} source="created" addLabel={false} showTime />
			<br />
			<Typography variant="caption">{fromNow}</Typography>
		</Fragment>
	);
};
export default DateAgoField;
