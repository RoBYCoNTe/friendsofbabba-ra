import * as React from "react";

import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

export const styles = (theme) => ({
  /* Styles applied to the root element. */
  root: {
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: -2,
  },
});

const AlertTitle = React.forwardRef(function AlertTitle(props, ref) {
  const { classes, className, ...other } = props;

  return (
    <Typography
      gutterBottom
      component="div"
      ref={ref}
      className={clsx(classes.root, className)}
      {...other}
    />
  );
});

AlertTitle.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
};

export default withStyles(styles, { name: "MuiAlertTitle" })(AlertTitle);
