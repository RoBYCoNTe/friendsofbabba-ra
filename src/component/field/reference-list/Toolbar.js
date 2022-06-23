import { TopToolbar, useTranslate } from "react-admin";

import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { stringify } from "query-string";

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: "FobReferenceListFieldToolbar" }
);

/**
 * Basic toolbar to handle referenced records in to `<ReferenceListField />`.
 * You can customize the toolbar style overriding **FobReferenceListFieldToolbar**
 * styles in your theme.
 *
 * @param {Object} props
 * @param {Object} props.additionalData
 *  Additional data to pass when create button is pressed.
 *  **Additional data is passed to the new record form.**
 *
 * @param {Object} props.createLabel
 *  Label to use for the create button.
 *
 * @param {Object} props.record
 * 	Record for which the list of referenced records is displayed.
 *
 * @param {String} props.reference
 *  Reference column to filter the list of referenced records.
 *  For example if you need to filter blog-post-comments by blog-post,
 *  then you should pass `blog-post-comments`
 *
 * @param {String} props.target
 *  Foreign key column to filter the list of referenced records.
 *  For example, if you need to filter blog-post-comments by blog-post,
 *  then you should pass `blog_post_id` as the target.
 *
 * @returns {JSX.Element}
 */
const Toolbar = ({
  additionalData,
  createLabel = "ra.action.create",
  record,
  reference,
  resource,
  target,
}) => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <TopToolbar resource={resource} className={classes.root}>
      <Button
        component={Link}
        disableElevation
        variant="outlined"
        color="primary"
        to={{
          pathname: `/${reference}/create`,
          search: stringify({
            source: JSON.stringify({
              [target]: record?.id,
              ...additionalData,
            }),
          }),
        }}
      >
        {translate(createLabel)}
      </Button>
    </TopToolbar>
  );
};
export default Toolbar;
