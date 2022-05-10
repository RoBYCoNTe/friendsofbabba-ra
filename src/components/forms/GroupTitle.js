import { Divider, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));
const GroupTitle = ({ title, subTitle, divider = true }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography classes={classes} variant="h6" gutterBottom>
        {title}
      </Typography>
      {divider && <Divider classes={classes} />}
      {subTitle && (
        <Typography classes={classes} variant="body1">
          {subTitle}
        </Typography>
      )}
    </Fragment>
  );
};
export default GroupTitle;
