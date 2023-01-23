import { Typography, makeStyles } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { get } from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    "text-overflow": "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    whiteSpace: "break-spaces",
  },
}));
const LongTextField = ({
  record,
  source,
  width = undefined,
  minWidth = undefined,
  maxWidth = undefined,
  maxRows = 3,
  sortable,
  basePath,
  sortBy,
  variant = "body2",
  ...props
}) => {
  const classes = useStyles();
  return (
    <Typography
      {...props}
      variant={variant}
      title={get(record, source)}
      className={classes.root}
      style={{
        width,
        minWidth,
        maxWidth,
        WebkitLineClamp: maxRows,
      }}
    >
      {get(record, source)}
    </Typography>
  );
};

LongTextField.propTypes = {
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  width: PropTypes.number,
  maxRows: PropTypes.number,
};

export default LongTextField;
