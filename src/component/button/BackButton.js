import React, { useCallback } from "react";

import { ArrowBack as BackIcon } from "@material-ui/icons";
import { Button } from "react-admin";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

/**
 * Renders a button that navigates back to the previous page (to).
 * foo
 * @param {Object} props
 * @param {String|null} props.to The URL to navigate to.
 * @param {String|null} props.resource The label of the button.
 * @param {String|null} props.label The label of the button.
 * @param {String|null} props.mode The mode of the button: to or history.
 *
 * @example
 * // This button redirects to /customer-list
 * <BackButton to="/customer-list" resource="customers" />
 *
 * // This button redirects to /customers (becouse to was not specified).
 * <BackButton resource="customers" />
 *
 * @returns {React.ReactElement}
 */
const BackButton = ({
  resource,
  baseRecord,
  to,
  label = "ra.action.back",
  mode = "to",
  ...props
}) => {
  const history = useHistory();
  const handleClick = useCallback(
    (e) => {
      if (mode !== "history") {
        return;
      }
      e.preventDefault();
      e.stopPropagation();
      history.goBack();
    },
    [history, useHistory]
  );
  return (
    <Button
      {...props}
      onClick={handleClick}
      component={Link}
      to={
        to || {
          pathname: `/${resource}`,
        }
      }
      label={label}
    >
      <BackIcon />
    </Button>
  );
};

export default BackButton;

const BackButtonProps = BackButton;

BackButtonProps.propTypes = {
  resource: PropTypes.string,
  to: PropTypes.string,
  mode: PropTypes.oneOf(["to", "history"]),
};
