import { Link, Typography, makeStyles } from "@material-ui/core";
import React, { Fragment, useMemo, useState } from "react";

import PropTypes from "prop-types";
import { get } from "lodash";
import useFieldLabel from "./useFieldLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    whiteSpace: "break-spaces",
  },
  link: {
    cursor: "pointer",
    fontWeight: "bold",
  },
  visibility: {
    display: "block",
    clear: "both",
  },
}));
const TransactionNotesField = ({
  admin = false,
  record,
  source,
  minWidth = 150,
  maxRows = 3,
  component,
}) => {
  const classes = useStyles();
  const fieldLabel = useFieldLabel({ resource: "transactions" });

  const { isPrivate, value, tooLong } = useMemo(() => {
    const isPrivate = get(record, "is_private", true);
    const value = isPrivate && !admin ? null : get(record, source, "");
    const tooLong = value !== null && value.length > 200;
    return { isPrivate, value, tooLong };
  }, [record, admin, source]);
  const [showMore, setShowMore] = useState(false);
  const handleToggle = () => setShowMore(!showMore);

  return (
    <Fragment>
      <Typography
        component={component}
        className={classes.root}
        style={{ minWidth, WebkitLineClamp: showMore ? null : maxRows }}
        variant="body2"
        color={
          value === null || value.length === 0 ? "textSecondary" : "textPrimary"
        }
        display="inline"
      >
        {tooLong === false
          ? value !== null && value.length > 0
            ? value
            : fieldLabel("notes.empty")
          : null}
        {tooLong && (showMore ? value : value.substring(0, 200) + "...")}
      </Typography>
      {admin && value !== null && value.length > 0 && (
        <Typography
          component={component}
          color={isPrivate ? "error" : "textSecondary"}
          className={classes.visibility}
          variant="caption"
        >
          {fieldLabel(`notes.${isPrivate ? "private" : "public"}`)}
        </Typography>
      )}
      {tooLong && (
        <Link underline="hover" className={classes.link} onClick={handleToggle}>
          {fieldLabel(`notes.${showMore ? "show_less" : "show_more"}`)}
        </Link>
      )}
    </Fragment>
  );
};

TransactionNotesField.propTypes = {
  minWidth: PropTypes.number,
  maxRows: PropTypes.number,
};

export default TransactionNotesField;
