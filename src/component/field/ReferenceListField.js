import {
  Datagrid,
  EditButton,
  ReferenceManyField,
  SimpleList,
  TopToolbar,
  useInput,
  useTranslate,
} from "react-admin";
import React, { Fragment } from "react";
import { Typography, useMediaQuery } from "@material-ui/core";

import { Button } from "@material-ui/core";
import DeleteWithConfirmButton from "../button/DeleteWithConfirmButton";
import { FormHelperText } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { stringify } from "query-string";

export const makeRedirect = ({ resource, record, tab }) => {
  if (tab > 0) {
    return `/${resource}/${record?.id}/${tab}`;
  }
  return `/${resource}/${record?.id}`;
};

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: theme.spacing(1),
  },
  sorry: {
    padding: theme.spacing(1),
  },
  empty: {
    padding: theme.spacing(1),
  },
  error: {
    padding: theme.spacing(1),
  },
}));

/**
 * Render a list of referenced records.
 *
 * @param {Object} props
 * @param {Function|String} props.removeRedirect - Function or string to redirect to after delete
 * @param {String} props.reference - The reference to the related records
 * @param {String} props.target - The target column containing the foreign key.
 * @param {Number} props.tab - The tab to redirect to.
 * @param {Object} props.filter - The filter to apply to the list of related records.
 * @returns
 */
const ReferenceListField = ({
  removeRedirect,
  reference,
  target,
  tab = 0,
  filter,
  empty = "ra.no_results",
  sorry = "ra.reference_list.sorry",
  create = true,
  createLabel = "ra.action.create",
  modify = true,
  modifyLabel = "ra.action.edit",
  remove = true,
  removeLabel = "ra.action.delete",
  additionalData,
  mobileBreakpoint,
  mobilePrimaryText = null,
  mobileSecondaryText = null,
  mobileTertiaryText = null,
  mobileLinkType = false,
  ...props
}) => {
  const classes = useStyles();
  const { resource, record } = props;
  const {
    meta: { submitError },
  } = useInput({ ...props });
  const translate = useTranslate();
  const isMobile = useMediaQuery((theme) =>
    theme.breakpoints.down(mobileBreakpoint ?? "sm")
  );

  if (!removeRedirect) {
    removeRedirect = makeRedirect({ resource, record, tab });
  }
  return record?.id > 0 ? (
    <Fragment>
      <ReferenceManyField
        {...props}
        empty={
          React.isValidElement(empty) ? (
            React.cloneElement(empty, { key: "empty" })
          ) : (
            <Typography className={classes.empty} key="empty">
              {translate(empty)}
            </Typography>
          )
        }
        reference={reference}
        target={target}
        filter={{ [target]: record?.id, ...filter }}
      >
        {isMobile &&
        mobileBreakpoint !== false &&
        mobilePrimaryText !== null ? (
          <SimpleList
            primaryText={mobilePrimaryText}
            secondaryText={mobileSecondaryText}
            tertiaryText={mobileTertiaryText}
            linkType={mobileLinkType}
          />
        ) : (
          <Datagrid>
            {React.Children.map(props.children, (field, index) =>
              React.isValidElement(field)
                ? React.cloneElement(field, { key: index })
                : null
            )}
            {modify && <EditButton />}
            {remove && <DeleteWithConfirmButton redirect={removeRedirect} />}
          </Datagrid>
        )}
      </ReferenceManyField>
      {submitError && typeof submitError === "string" && (
        <FormHelperText error className={classes.error}>
          {submitError}
        </FormHelperText>
      )}
      {create && record?.id > 0 && (
        <TopToolbar resource={resource} className={classes.toolbar}>
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
      )}
    </Fragment>
  ) : React.isValidElement(sorry) ? (
    React.cloneElement(sorry, { key: "sorry" })
  ) : (
    <Typography className={classes.sorry} key="sorry">
      {translate(sorry)}
    </Typography>
  );
};

ReferenceListField.propTypes = {
  tab: PropTypes.number,
  sorry: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  mobileBreakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  mobilePrimaryText: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  mobileSecondaryText: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  mobileTertiaryText: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  mobileLinkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  additionalData: PropTypes.object,
  removeRedirect: PropTypes.string,
  filter: PropTypes.object,
  create: PropTypes.bool,
  createLabel: PropTypes.string,
  modify: PropTypes.bool,
  modifyLabel: PropTypes.string,
  remove: PropTypes.bool,
  removeLabel: PropTypes.string,
  source: PropTypes.string,
  reference: PropTypes.string,
  target: PropTypes.string,
  record: PropTypes.object,
  resource: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ReferenceListField;
