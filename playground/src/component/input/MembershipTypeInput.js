import { RadioButtonGroupInput } from "react-admin";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const defaultChoices = [
  {
    id: "public",
    name: "resources.operational-contacts.fields.membership.public",
  },
  {
    id: "private",
    name: "resources.operational-contacts.fields.membership.private",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
  },
}));
const MembershipTypeInput = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <RadioButtonGroupInput {...props} choices={defaultChoices} />
    </div>
  );
};
export default MembershipTypeInput;
