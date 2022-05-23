import { FileInput, InputHelperText, Labeled } from "react-admin";
import React, { Fragment } from "react";

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
    <FileInput {...props}>
      <MediaField source="filepath" title={title} />
    </FileInput>
  );
};

export default MediaInput;
