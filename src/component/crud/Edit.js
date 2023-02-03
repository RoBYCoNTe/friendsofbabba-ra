import * as buttons from "../button/index.js";

import React, { useContext, useMemo } from "react";

import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import Form from "./Form";
import FormActions from "./FormActions";
import { Edit as RaEdit } from "react-admin";
import Title from "./Title.js";
import useCustomComponents from "./useCustomComponents";

const Create = (props) => {
  const { getForm, components } = useContext(CrudContext);
  const customComponents = useCustomComponents(props.resource);
  const form = useMemo(
    () => getForm(props.resource),
    [props.resource, getForm]
  );
  const hasTitle = useMemo(() => form?.titles?.edit || form?.title, [form]);
  return (
    <RaEdit
      {...props}
      title={
        hasTitle ? (
          <Title content={form?.titles?.edit || form?.title} />
        ) : undefined
      }
      actions={
        form?.actions?.length > 0 ? (
          <FormActions
            resource={props.resource}
            buttons={form?.actions}
            components={{
              ...buttons,
              ...components,
              ...customComponents,
            }}
          />
        ) : (
          false
        )
      }
    >
      <Form />
    </RaEdit>
  );
};
export default Create;
