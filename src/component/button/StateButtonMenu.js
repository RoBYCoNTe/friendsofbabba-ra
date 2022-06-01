import React, { useCallback } from "react";

import { ArrowForwardIos as ArrowForwardIosIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { DoubleArrow as DoubleArrowIcon } from "@material-ui/icons";
import { Menu } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import StateButton from "./StateButton";
import { makeStyles } from "@material-ui/core/styles";
import { useTranslate } from "react-admin";

const useStyles = makeStyles((theme) => ({
  button: {
    disableElevation: theme.props?.MuiButton?.disableElevation === true,
  },
}));

const StateButtonMenu = ({ states, ...props }) => {
  const classes = useStyles();
  const translate = useTranslate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleState = useCallback(
    (state) => (e) => {
      setState(state.label);
      setAnchorEl(null);
    },
    []
  );

  return (
    <div>
      <Button
        aria-controls="workflow-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={handleClick}
      >
        <DoubleArrowIcon />
        {props.saving ? `${state}...` : translate("ra.workflow.do_action")}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {states.map((state) => (
          <StateButton
            {...props}
            key={state.code}
            component={MenuItem}
            state={state}
            color="default"
            variant="text"
            icon={<ArrowForwardIosIcon />}
            onClick={handleState(state)}
          />
        ))}
      </Menu>
    </div>
  );
};

export default StateButtonMenu;
