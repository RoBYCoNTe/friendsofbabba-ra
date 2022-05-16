import BackIcon from "@material-ui/icons/ArrowBack";
import { Button } from "react-admin";
import { Link } from "react-router-dom";
import React from "react";

const BackButton = ({ resource, baseRecord, to, ...props }) => {
  return (
    <Button
      {...props}
      component={Link}
      to={
        to || {
          pathname: `/${resource}`,
        }
      }
      label={"ra.action.back"}
    >
      <BackIcon />
    </Button>
  );
};
export default BackButton;
