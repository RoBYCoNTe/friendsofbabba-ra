import {
  DeleteWithConfirmButton,
  Toolbar as RaToolbar,
  SaveButton,
} from "react-admin";
import React, { useMemo } from "react";

import BackButton from "../button/BackButton";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(
  (theme) => ({
    toolbar: {
      "& .MuiButton-root": {
        marginRight: theme.spacing(1),
      },
    },
  }),
  { name: "FobReferenceToolbar" }
);
const ReferenceToolbar = ({
  backRedirect,
  backReferenceTarget,
  backReference,
  backTab = 1,
  canSave = true,
  canGoBack = true,
  onSuccess,
  ...props
}) => {
  const classes = useStyles();
  const { record } = props;
  const referenceId = get(record, backReferenceTarget, 0);

  const backUrl = useMemo(
    () =>
      referenceId === 0
        ? backRedirect
        : backTab > 0
        ? `/${backReference}/${referenceId}/${backTab}`
        : `/${backReference}/${referenceId}`,
    [backRedirect, backReference, referenceId, backTab]
  );
  return (
    <RaToolbar {...props} classes={classes}>
      <SaveButton
        redirect={backUrl}
        disabled={!canSave}
        onSuccess={onSuccess ? () => onSuccess(backUrl) : undefined}
      />
      {canGoBack && <BackButton to={backUrl} />}
      {record?.id > 0 && <DeleteWithConfirmButton redirect={backUrl} />}
    </RaToolbar>
  );
};

export default ReferenceToolbar;
