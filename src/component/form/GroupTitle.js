import { Divider, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(1),
    fontWeight: "bold",
  },
  spacer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  subTitle: {
    margin: theme.spacing(1),
  },
}));
const GroupTitle = ({ title, subTitle, divider = true, color }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography
        color={color}
        classes={{ root: classes.title }}
        variant="h6"
        gutterBottom
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {divider && <Divider classes={{ root: classes.spacer }} />}
      {subTitle && (
        <Typography
          color={color}
          classes={{ root: classes.subTitle }}
          variant="body1"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      )}
    </Fragment>
  );
};
export default GroupTitle;
