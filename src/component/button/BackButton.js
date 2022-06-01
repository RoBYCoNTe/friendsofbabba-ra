import { ArrowBack as BackIcon } from "@material-ui/icons";
import { Button } from "react-admin";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

/**
 * Renders a button that navigates back to the previous page (to).
 * foo
 * @param {Object} props
 * @param {string|null} props.to The URL to navigate to.
 * @param {string} props.resource The label of the button.
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

const BackButtonProps = BackButton;

BackButtonProps.propTypes = {
  resource: PropTypes.string.isRequired,
  to: PropTypes.string,
};
