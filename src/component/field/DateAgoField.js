import React, { Fragment, useMemo } from "react";

import { DateField } from "react-admin";
import { Typography } from "@material-ui/core";
import moment from "moment";
import { useLocale } from "ra-core";

const DateAgoField = ({ record }) => {
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
