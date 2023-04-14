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
		require(`moment/locale/${locale}`);
		moment.locale(locale);
		return moment(record?.created).fromNow();
	}, [record?.created, locale]);
	return (
		<Fragment>
			<Typography variant="caption">{fromNow}</Typography>
			<br />
			<DateField record={record} source="created" addLabel={false} showTime />
		</Fragment>
	);
};
export default DateAgoField;
