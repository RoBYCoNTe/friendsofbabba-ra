import { ImageField, ImageInput as RaImageInput } from "react-admin";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  image: {
    margin: 0,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderRadius: 5,
    border: `1px solid ${theme.palette.divider}`,
  },
});

const useStyles = makeStyles(styles);

const CoverField = (props) => {
  const classes = useStyles();
  return <ImageField classes={classes} {...props} />;
};

const ImageInput = (props) => {
  return (
    <RaImageInput {...props}>
      <CoverField source="file.path" title="file.name" />
    </RaImageInput>
  );
};
export default ImageInput;
