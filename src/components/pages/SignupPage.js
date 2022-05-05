import { Notification } from "ra-ui-materialui";
import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const SignupPage = ({ staticContext, children, ...props }) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { ...props })
          : child
      )}
      <Notification />
    </ThemeProvider>
  );
};
export default SignupPage;
