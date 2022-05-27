import Button from "@material-ui/core/Button";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "ra-core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(2)}px)`,
  },
}));
const ResetPasswordButton = ({
  href = "/#/reset-password",
  color = "primary",
  variant = "outlined",
  label = "ra.auth.reset_password",
}) => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <Button
      className={classes.button}
      href={href}
      color={color}
      type="button"
      variant={variant}
    >
      {translate(label)}
    </Button>
  );
};
export default ResetPasswordButton;
