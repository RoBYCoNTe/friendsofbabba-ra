import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  FormHelperText,
  Switch,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, {
  Fragment,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useNotify, useRefresh, useTranslate, useUpdate } from "react-admin";

import PropTypes from "prop-types";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import classnames from "classnames";
import { get } from "lodash";

const useStyles = makeStyles((theme) => ({
  required: {},
}));

const ConfirmMove = ({
  admin = false,
  open = false,
  resource,
  record,
  state,
  onCancel,
}) => {
  const classes = useStyles();
  const refresh = useRefresh();
  const notify = useNotify();
  const [notes, setNotes] = useState("");
  const [isPrivate, setPrivate] = useState(false);
  const { getWorkflow } = useContext(WorkflowContext);
  const workflow = useMemo(
    () => getWorkflow(resource),
    [getWorkflow, resource]
  );
  const translate = useTranslate();
  const handleChange = useCallback((e) => setNotes(e.target.value), [setNotes]);
  const handlePrivate = useCallback(
    (e) => setPrivate(e.target.checked),
    [setPrivate]
  );
  const needsNotes = useMemo(
    () => workflow && workflow.needsNotes(record, state),
    [workflow, record, state]
  );
  const [handleUpdate, { loading }] = useUpdate(
    resource,
    record.id,
    {
      ...record,
      user: null,
      state: get(state, "code"),
      notes: notes,
      is_private: isPrivate,
    },
    record,
    {
      onSuccess: () => {
        notify("resources.workflow.move.success");
        refresh();
      },
      onFailure: ({ message, body, status }) => {
        onCancel();
        notify("resources.workflow.move.error", "error", {
          reason: message,
          message,
          body,
          status,
        });
      },
    }
  );
  return (
    <Dialog open={open}>
      <DialogTitle>{translate("resources.workflow.move.title")}</DialogTitle>
      <DialogContent>
        <DialogContentText
          className={classnames(needsNotes && classes.required)}
        >
          {translate(
            "resources.workflow.move.message" + (needsNotes ? ".required" : "")
          )}
        </DialogContentText>
        <TextField
          autoFocus
          onChange={handleChange}
          margin="dense"
          id="notes"
          label={translate(`resources.workflow.fields.notes`)}
          type="text"
          multiline
          fullWidth
        />
        {admin && (
          <Fragment>
            <FormControlLabel
              control={
                <Switch
                  checked={isPrivate}
                  onChange={handlePrivate}
                  name="is_private"
                  color="primary"
                />
              }
              label={translate(`resources.workflow.fields.is_private`)}
            />

            <FormHelperText>
              {translate(`resources.workflow.fields.is_private.help`)}
            </FormHelperText>
          </Fragment>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>{translate(`ra.action.cancel`)}</Button>
        <Button
          onClick={handleUpdate}
          color="primary"
          disabled={(needsNotes && notes.length === 0) || loading}
        >
          {translate(`ra.action.confirm`)}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
ConfirmMove.propTypes = {
  state: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
  }),
  resource: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};
export default ConfirmMove;
