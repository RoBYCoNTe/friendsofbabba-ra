import React, { useCallback } from "react";

import { SaveButton } from "react-admin";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-final-form";

const useStyles = makeStyles((theme) => ({
  button: {
    disableElevation: theme.props?.MuiButton?.disableElevation === true,
  },
}));
const StateButton = (
  { handleSubmitWithRedirect, small, state, pristine, ...props },
  ref
) => {
  const classes = useStyles();
  const form = useForm();
  const handleClick = useCallback(() => {
    form.change("state", state.code);
    handleSubmitWithRedirect("list");
  }, [state, form, handleSubmitWithRedirect]);

  return (
    <SaveButton
      {...props}
      className={classes.button}
      redirect="list"
      color="primary"
      handleSubmitWithRedirect={handleClick}
      label={get(state, "label")}
    />
  );
};

export default React.forwardRef(StateButton);
