import React, { useContext, useMemo } from "react";

import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import Form from "./Form";
import { Create as RaCreate } from "react-admin";
import Title from "./Title";

const Create = (props) => {
  const { getForm } = useContext(CrudContext);
  const form = useMemo(
    () => getForm(props.resource),
    [props.resource, getForm]
  );
  return (
    <RaCreate
      {...props}
      title={<Title content={form?.titles?.create || form?.title} />}
    >
      <Form />
    </RaCreate>
  );
};
export default Create;
