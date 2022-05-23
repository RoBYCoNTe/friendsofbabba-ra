import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import React, { Fragment } from "react";

import { Warning as WarningIcon } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const parseField = (field) => {
  const match = field.match(/\d+/);
  const number = match ? parseInt(match[0], 10) + 1 : null;
  const name = field.replace(/\d+/, "n");

  return {
    number,
    name,
  };
};
const useStyles = makeStyles((theme) => ({
  subheaderRoot: {
    padding: theme.spacing(1),
    paddingTop: 0,
    paddingBottom: 0,
  },
  listItemRoot: {
    marginLeft: theme.spacing(1),
  },
  listRoot: {
    "& .MuiList-root": {
      margin: 0,
      padding: 0,
      paddingLeft: theme.spacing(3),
      "& li:last-child": {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    },
  },
}));
const ValidationItem = ({ resource, field, error, translate, component }) => {
  const { number, name } = parseField(field);
  const classes = useStyles();
  return typeof error === "string" ? (
    <ListItem dense disableGutters classes={{ root: classes.listItemRoot }}>
      {React.isValidElement(component) ? (
        React.cloneElement(component, {
          error,
          field,
          number,
          resource,
        })
      ) : (
        <Fragment>
          <ListItemAvatar>
            <Avatar>
              <WarningIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={translate(`errors.${resource}.${name}`, { number })}
            secondary={error}
          />
        </Fragment>
      )}
    </ListItem>
  ) : (
    <List classes={{ root: classes.listRoot }}>
      <ListSubheader
        disableGutters
        disableSticky
        classes={{ root: classes.subheaderRoot }}
      >
        {translate(`errors.${resource}.subheader.${name}`, { number })}
      </ListSubheader>
      {Object.keys(error).map((subField) => (
        <ValidationItem
          key={subField}
          field={`${field}.${subField}`}
          error={error[subField]}
          resource={resource}
          translate={translate}
          component={component}
        />
      ))}
    </List>
  );
};
export default ValidationItem;
