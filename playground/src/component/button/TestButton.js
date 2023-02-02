import { Button } from "react-admin";
import React from "react";

const TestButton = (props) => {
  // console.info("TestButton props:", props);
  return <Button label="Test" disabled={props.disabled} />;
};

export default TestButton;
