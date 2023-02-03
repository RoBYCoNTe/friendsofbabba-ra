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
  const hasTitle = useMemo(() => form?.titles?.create || form?.title, [form]);
  return (
    <RaCreate
      {...props}
      title={
        hasTitle ? (
          <Title content={form?.titles?.create || form?.title} />
        ) : undefined
      }
    >
      <Form />
    </RaCreate>
  );
};
export default Create;
