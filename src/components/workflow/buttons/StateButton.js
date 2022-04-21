import React, { useCallback } from "react";

import { SaveButton } from "react-admin";
import { get } from "lodash";
import { useForm } from "react-final-form";

const StateButton = ({
  handleSubmitWithRedirect,
  small,
  state,
  pristine,
  ...props
}) => {
  const form = useForm();

  const handleClick = useCallback(() => {
    form.change("state", state.code);
    handleSubmitWithRedirect("list");
  }, [state, form, handleSubmitWithRedirect]);

  return (
    <SaveButton
      {...props}
      redirect="list"
      color="primary"
      handleSubmitWithRedirect={handleClick}
      label={get(state, "label")}
    />
  );
};

export default StateButton;
