import { ImageField } from "react-admin";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  image: ({ width, height }) => ({
    margin: 0,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRadius: 5,
    border: `1px solid ${theme.palette.divider}`,
    width,
    height,
  }),
});

const useStyles = makeStyles(styles);

const CoverField = ({ width, height, ...props }) => {
  const classes = useStyles({ width, height });
  return <ImageField classes={classes} {...props} />;
};
export default CoverField;
