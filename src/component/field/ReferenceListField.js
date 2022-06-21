import {
  Datagrid,
  EditButton,
  Labeled,
  Pagination,
  ReferenceManyField,
  SimpleList,
  TopToolbar,
  useInput,
  useTranslate,
} from "react-admin";
import React, { Fragment } from "react";
import { Typography, useMediaQuery } from "@material-ui/core";

import { Button } from "@material-ui/core";
import Component from "../crud/Component";
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
 * @param {Function|String} props.removeRedirect
 *  Function or string to redirect to after delete
 * @param {String} props.reference
 *  The reference to the related records
 * @param {String} props.target
 *  The target column containing the foreign key.
 * @param {Number} props.tab
 *  The tab to redirect to.
 * @param {Object} props.filter
 *  The filter to apply to the list of related records.
 * @param {Object} props.empty
 *  Message to display when there are no related records.
 * @param {Function|Component|String} props.sorry
 *  Message to display when there is no valid record for which to display the list.
 *  This can happen when the record is new and you have to explain why users can't see the list of related records
 *  or cannot add new referenced record.
 * @param {Boolean} props.create
 *  Indicates if the user can create new referenced records.
 * @param {String} props.createLabel
 *  Label to display on the button to create a new referenced record.
 * @param {Boolean} props.modify
 *  Indicates if the user can modify existing referenced records.
 * @param {String} props.modifyLabel
 *  Label to display on the button to modify a referenced record.
 * @param {Boolean} props.remove
 *  Indicates if the user can remove existing referenced records.
 * @param {String} props.removeLabel
 *  Label to display on the button to remove a referenced record.
 * @param {String} props.mobileBreakpoint
 *  The breakpoint at which the list should be displayed in a mobile view.
 * @param {Function} props.mobilePrimaryText
 *  The text to display in list when displayed in a mobile view.
 * @param {Function} props.mobileSecondaryText
 *  The text to display in list when displayed in a mobile view.
 * @param {Function} props.mobileTertiaryText
 *  The actions to display in list when displayed in a mobile view.
 * @param {String|Boolean} props.mobileLinkType
 *  The type of link to display in list when displayed in a mobile view.
 *
 * @param {Array} props.columns
 *  List of columns to display in the list.
 *
 * @returns {JSX.Element}
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
  columns = [],
  components,
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
  return (
    <Labeled {...props}>
      {record?.id > 0 ? (
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
            pagination={<Pagination />}
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
                {columns.map(
                  ({
                    source,
                    label,
                    sortable,
                    component,
                    sortBy,
                    componentProps,
                  }) => (
                    <Component
                      key={source}
                      {...(component.indexOf("Button") === -1
                        ? { source, label, sortable, sortBy, addLabel: false }
                        : {})}
                      component={component}
                      componentProps={componentProps}
                      components={components}
                    />
                  )
                )}
                {modify && <EditButton />}
                {remove && (
                  <DeleteWithConfirmButton redirect={removeRedirect} />
                )}
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
      )}
    </Labeled>
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
  children: PropTypes.node,
  columns: PropTypes.array,
};

export default ReferenceListField;
