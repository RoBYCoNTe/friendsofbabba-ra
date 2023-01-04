import { Box, LinearProgress, Typography } from "@material-ui/core";

import React from "react";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  progress: {
    height: 20 + theme.spacing(1),
    width: 100,
    borderRadius: theme.spacing(0.5),
  },
  label: {
    position: "relative",
    color: theme.palette.primary.contrastText,
    display: "block",
    float: "left",
    marginLeft: -100,
    width: 100,
    textAlign: "center",
  },
}));

const ProgressField = ({ record, source }) => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <LinearProgress
        classes={{
          root: classes.progress,
        }}
        variant="determinate"
        color={get(record, source) >= 100 ? "primary" : "secondary"}
        value={get(record, source)}
      />

      <Typography className={classes.label}>
        {get(record, source, 0).toFixed(2)}%
      </Typography>
    </Box>
  );
};
export default ProgressField;
