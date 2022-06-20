import * as buttons from "../button/index.js";

import React, { useContext, useMemo } from "react";

import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import Form from "./Form";
import FormActions from "./FormActions";
import { Edit as RaEdit } from "react-admin";
import useCustomComponents from "./useCustomComponents";

const Create = (props) => {
  const { getForm, components } = useContext(CrudContext);
  const customComponents = useCustomComponents(props.resource);
  const form = useMemo(
    () => getForm(props.resource),
    [props.resource, getForm]
  );
  return (
    <RaEdit
      {...props}
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
