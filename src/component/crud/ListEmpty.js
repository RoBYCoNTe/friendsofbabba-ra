import * as React from "react";

import {
  useGetResourceLabel,
  useListContext,
  useResourceContext,
  useTranslate,
} from "ra-core";

import { CreateButton } from "react-admin";
import { Inbox } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/**
 * Empty component for the List view when there is no data to display.
 *
 * @param {Object} props
 * @param {Object} props.grid
 *  Grid configuration used to render the Empty.
 *  Generally this prop is passed by Crud when rendering lists using backend
 *  descriptors and is not necessary when using it as your own component.
 * @param {Boolean} props.create
 *  Set to false to disable the creation button.
 *  This param is useful to force CreateButton to be disabled.
 *
 * @returns {React.Component}
 */
const ListEmpty = ({ grid, create = true, ...props }) => {
  const { basePath, hasCreate } = useListContext(props);
  const resource = useResourceContext(props);
  const classes = useStyles(props);
  const translate = useTranslate();

  const getResourceLabel = useGetResourceLabel();
  const resourceName = translate(`resources.${resource}.forcedCaseName`, {
    smart_count: 0,
    _: getResourceLabel(resource, 0),
  });

  const emptyMessage = translate("ra.page.empty", { name: resourceName });
  const inviteMessage = translate("ra.page.invite");

  return (
    <>
      <div className={classes.message}>
        <Inbox className={classes.icon} />
        <Typography variant="h4" paragraph>
          {translate(`resources.${resource}.empty`, {
            _: emptyMessage,
          })}
        </Typography>
        {create && hasCreate && grid?.canCreate !== false && (
          <Typography variant="body1">
            {translate(`resources.${resource}.invite`, {
              _: inviteMessage,
            })}
          </Typography>
        )}
      </div>
      {create && hasCreate && grid?.canCreate !== false && (
        <div className={classes.toolbar}>
          <CreateButton
            variant="contained"
            basePath={basePath}
            label={translate(`resources.${resource}.create`, {
              _: "ra.action.create",
            })}
          />
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles(
  (theme) => ({
    message: {
      textAlign: "center",
      opacity: theme.palette.type === "light" ? 0.5 : 0.8,
      margin: "0 1em",
      color:
        theme.palette.type === "light" ? "inherit" : theme.palette.text.primary,
    },
    icon: {
      width: "9em",
      height: "9em",
    },
    toolbar: {
      textAlign: "center",
      marginTop: "2em",
    },
  }),
  { name: "FobListEmpty" }
);

export default ListEmpty;
