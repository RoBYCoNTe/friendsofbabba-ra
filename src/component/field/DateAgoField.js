import { DateField, useLocaleState, useRecordContext } from 'react-admin';
import React, { Fragment, useMemo } from 'react';

import { Typography } from '@mui/material';
import dayjs from 'dayjs';
import { get } from 'lodash';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const DateAgoField = (props) => {
	const record = useRecordContext(props);
	const locale = useLocaleState();
	const fromNow = useMemo(
		() => dayjs(get(record, props?.source)).locale(locale).fromNow(),
		[record, props?.source, locale]
	);

	return (
		<Fragment>
			<DateField record={record} source={props.source} showTime />
			<br />
			<Typography variant="caption" color="textSecondary">
				{fromNow}
			</Typography>
		</Fragment>
	);
};
export default DateAgoField;
