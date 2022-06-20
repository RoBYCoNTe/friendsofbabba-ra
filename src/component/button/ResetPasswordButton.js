import {
  Button,
  Confirm,
  useMutation,
  useNotify,
  useTranslate,
} from "react-admin";
import React, { Fragment, useState } from "react";

import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { get } from "lodash";

/**
 * Button to reset a user's password.
 * This button can be used in list or forms (everywhere a record
 * exists in the list of props).
 *
 * @param {Object} props
 * @param {Object} props.record User's record.
 * @returns  {JSX.Element}
 */
const ResetPasswordButton = ({ record }) => {
  const notify = useNotify();
  const translate = useTranslate();
  const [open, setOpen] = useState(false);
  const [handleConfirm, { loading }] = useMutation(
    {
      type: "post",
      resource: "users/reset-password",
      payload: {
        account: get(record, "email"),
      },
    },
    {
      onSuccess: () => {
        setOpen(false);
        notify("resources.users.messages.reset_success", "info");
      },
      onFailure: ({ message }) => {
        setOpen(false);
        notify("resources.users.messages.reset_failure", "error");
      },
    }
  );
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };
  const handleCancel = () => setOpen(false);
  const id = get(record, "id", 0);
  if (id === 0) {
    return null;
  }
  return (
    <Fragment>
      <Confirm
        isOpen={open}
        loading={loading}
        title="resources.users.messages.reset_title"
        content="resources.users.messages.reset_content"
        onConfirm={handleConfirm}
        onClose={handleCancel}
      />
      <Button
        onClick={handleClick}
        color="primary"
        label={translate("resources.users.buttons.reset")}
      >
        <RotateLeftIcon />
      </Button>
    </Fragment>
  );
};
export default ResetPasswordButton;
