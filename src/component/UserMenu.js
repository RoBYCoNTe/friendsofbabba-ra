import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import PropTypes from "prop-types";
import React from "react";

const UserMenu = ({ logout, children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleMenu} color="inherit">
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {!children && logout}
        {React.Children.map(children, (child) =>
          child !== logout
            ? React.cloneElement(child, {
                onClick: handleClose,
              })
            : logout
        )}
      </Menu>
    </div>
  );
};

UserMenu.propTypes = {
  logout: PropTypes.element.isRequired,
};

export default UserMenu;
