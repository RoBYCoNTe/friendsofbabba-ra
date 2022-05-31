import { Box, Typography } from "@material-ui/core";

import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginLeft: -theme.spacing(1),
  },
  brand: {},
  title: {
    fontWeight: "bold",
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(-0.5),
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

/**
 * @description The brand component renders a custom top-left brand with logo, title and subtitle.
 *
 * @param {Object} props
 * @param {String} props.title The title of the brand.
 * @param {String} props.subTitle The subtitle of the brand.
 * @param {String} props.logo The logo of the brand.
 */
const Brand = ({
  logo = undefined,
  title = undefined,
  subTitle = undefined,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {logo ? (
        React.isValidElement(logo) ? (
          <Box className={classes.logo}>{logo}</Box>
        ) : (
          <Box component="img" sx={{ height: 64 }} alt={title} src={logo} />
        )
      ) : null}
      <div className={classes.brand}>
        {title ? (
          React.isValidElement(title) ? (
            title
          ) : (
            <Typography
              className={classes.title}
              href="/"
              variant="h6"
              color="inherit"
            >
              {title}
            </Typography>
          )
        ) : null}

        {subTitle ? (
          React.isValidElement(subTitle) ? (
            title
          ) : (
            <Typography color="textSecondary" variant="caption">
              {subTitle}
            </Typography>
          )
        ) : null}
      </div>
    </div>
  );
};

Brand.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Brand;
