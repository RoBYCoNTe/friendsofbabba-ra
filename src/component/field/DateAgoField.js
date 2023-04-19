import React, { Fragment, useMemo } from "react";

import { DateTime } from "luxon";
import { DateField, useLocale, useRecordContext } from "react-admin";

import { Typography } from "@mui/material";

const DateAgoField = (props) => {
	const record = useRecordContext(props);
	const locale = useLocale();
	const fromNow = useMemo(
		() =>
			DateTime.fromISO(record?.created).toRelative({
				base: DateTime.now(),
				locale,
			}),
		[record?.created, locale]
	);
	return (
		<Fragment>
			<DateField record={record} source="created" addLabel={false} showTime />
			<br />
			<Typography variant="caption">{fromNow}</Typography>
		</Fragment>
	);
};
export default DateAgoField;
