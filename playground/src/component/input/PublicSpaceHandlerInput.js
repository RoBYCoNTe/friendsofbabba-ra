import { RadioButtonGroupInput } from "react-admin";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const defaultChoices = [
  {
    id: "private",
    name: "resources.public-spaces.fields.handler.private",
  },
  {
    id: "public",
    name: "resources.public-spaces.fields.handler.public",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));
const PublicSpaceHandlerInput = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RadioButtonGroupInput {...props} choices={defaultChoices} />
    </div>
  );
};
export default PublicSpaceHandlerInput;
