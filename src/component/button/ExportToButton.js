import React, { Fragment } from "react";

import { Button } from "react-admin";
import ExportButton from "./ExportButton";
import { GetApp as GetAppIcon } from "@material-ui/icons";
import { Menu } from "@material-ui/core";

const ExportToButton = ({
  exportTo = ["csv", "xlsx"],
  label = "ra.action.export",
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (exportTo.length === 0) {
    return null;
  }

  return exportTo?.length > 1 ? (
    <Fragment>
      <Button label={label} onClick={handleClick} startIcon={<GetAppIcon />} />
      <Menu
        id="export-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {exportTo.map((extension) => (
          <ExportButton key={extension} {...props} extension={extension} menu />
        ))}
      </Menu>
    </Fragment>
  ) : (
    <ExportButton {...props} extension={exportTo[0]} />
  );
};

export default ExportToButton;
