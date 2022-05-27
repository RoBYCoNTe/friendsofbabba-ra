import React, { useCallback, useState } from "react";

import { Button } from "react-admin";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useDoImpersonate } from "../../data/createAuthProvider";

const ImpersonateUserButton = ({
  label = "ra.auth.sign_in",
  record,
  ...rest
}) => {
  const [loading, setLoading] = useState(false);
  const doImpersonate = useDoImpersonate(record?.id);
  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      setLoading(true);
      doImpersonate().then(() => setLoading(false));
    },
    [doImpersonate, setLoading]
  );
  return (
    <Button
      disabled={loading}
      color="primary"
      variant="text"
      label={label}
      onClick={handleClick}
      {...rest}
    >
      <VpnKeyIcon />
    </Button>
  );
};

export default ImpersonateUserButton;
