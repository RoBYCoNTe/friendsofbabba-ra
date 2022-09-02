import { FileInput, InputHelperText, Labeled, useNotify } from "react-admin";
import React, { Fragment, useCallback } from "react";

import { FormHelperText } from "@material-ui/core";
import MediaField from "../field/MediaField";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  labeled: {
    padding: theme.spacing(1),
  },
  list: {
    margin: theme.spacing(1),
  },
}));

const MediaInput = ({ title, disabled, ...props }) => {
  const classes = useStyles();
  const notify = useNotify();
  const handleRejection = useCallback(
    () =>
      props?.multiple
        ? notify("ra.message.files_rejected", { type: "error" })
        : notify("ra.message.file_rejected", { type: "error" }),
    [props?.multiple, notify]
  );
  if (disabled) {
    const value = get(props.record, props.source);
    const files = value ? (Array.isArray(value) ? value : [value]) : [];

    return (
      <Labeled {...props} className={classes.labeled}>
        <Fragment>
          {files.map((file, index) => (
            <MediaField
              key={index}
              record={file}
              source="filepath"
              title={title}
            />
          ))}
          <FormHelperText>
            <InputHelperText
              touched={false}
              error={false}
              helperText={props.helperText}
            />
          </FormHelperText>
        </Fragment>
      </Labeled>
    );
  }
  return (
    <FileInput
      {...props}
      options={{
        onDropRejected: handleRejection,
        ...props?.options,
      }}
    >
      <MediaField source="filepath" title={title} />
    </FileInput>
  );
};

export default MediaInput;
