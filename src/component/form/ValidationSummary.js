import { Button, CircularProgress, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useCallback, useMemo, useState } from "react";

import Alert from "../Alert";
import Group from "./Group";
import GroupItem from "./GroupItem";
import GroupTitle from "./GroupTitle";
import { List } from "@material-ui/core";
import ValidationItem from "./ValidationItem";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "ra-core";
import useValidationSummary from "./useValidationSummary";

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(1),
  },
  spaced: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const detectState = ({ errorsCount, mode, loading }) =>
  mode === "create"
    ? "explain"
    : loading
    ? "loading"
    : errorsCount > 0
    ? "warning"
    : "success";

const ValidationSummary = ({
  elevation = 1,
  spaced = true,
  source = "validationErrors",
  title = {
    warning: "ra.validation_summary.title.warning",
    success: "ra.validation_summary.title.success",
    loading: "ra.validation_summary.title.loading",
    explain: "ra.validation_summary.title.explain",
  },
  message = {
    warning: "ra.validation_summary.message.warning",
    success: "ra.validation_summary.message.success",
    loading: "ra.validation_summary.message.loading",
    explain: "ra.validation_summary.message.explain",
  },
  showWhenNoErrors = true,
  resource,
  children,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const translate = useTranslate();
  const { errorsCount, errorKeys, errorMap, loading, mode } =
    useValidationSummary({ source });
  const { groupTitle, groupMessage, severity } = useMemo(
    () => ({
      groupTitle: title[detectState({ errorsCount, mode, loading })],
      groupMessage: message[detectState({ errorsCount, mode, loading })],
      severity:
        loading || mode === "create"
          ? "info"
          : errorsCount > 0
          ? "warning"
          : "success",
    }),
    [errorsCount, loading, mode, message, title]
  );
  const toggleExpand = useCallback(
    () => setExpanded((expanded) => !expanded),
    []
  );

  if (resource == null || (errorsCount === 0 && !showWhenNoErrors)) {
    return null;
  }

  return (
    <Alert
      className={classnames({
        [classes.spaced]: spaced,
      })}
      icon={false}
      elevation={elevation}
      severity={severity}
    >
      <Group wrapper>
        <GroupTitle
          title={translate(groupTitle, { count: errorsCount })}
          subTitle={translate(groupMessage, { count: errorsCount })}
        />
        {loading && (
          <Group>
            <GroupItem lg={12} md={12} sm={12} xs={12}>
              <CircularProgress className={classes.progress} />
            </GroupItem>
          </Group>
        )}
        <Collapse in={expanded}>
          <Group>
            <GroupItem lg={10} md={11} sm={12}>
              <List dense component="nav" color="error">
                {errorKeys.map((field) => (
                  <ValidationItem
                    key={field}
                    field={field}
                    error={errorMap[field]}
                    resource={resource}
                    translate={translate}
                    component={children}
                  />
                ))}
              </List>
            </GroupItem>
          </Group>
        </Collapse>
        {!loading && errorKeys.length > 0 && (
          <Button
            onClick={toggleExpand}
            endIcon={expanded ? <ExpandLess /> : <ExpandMore />}
          >
            {translate(
              `ra.validation_summary.button.${
                expanded ? "expand_less" : "expand_more"
              }`
            )}
          </Button>
        )}
      </Group>
    </Alert>
  );
};

export default ValidationSummary;
