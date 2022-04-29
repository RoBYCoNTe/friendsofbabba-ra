import React, { useContext } from "react";
import { Loading, SimpleForm } from "react-admin";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import useCustomComponents from "./useCustomComponents";
import fields from "../fields/index.js";
import inputs from "../inputs/index.js";
import Toolbar from "../workflow/forms/Toolbar";
import Component from "./Component";
import useSaveMutation from "../../data/useSaveMutation";

const Form = ({ ...props }) => {
  const { getForm, loading } = useContext(CrudContext);
  const form = getForm(props.resource);
  const customComponents = useCustomComponents(props.resource);
  const save = useSaveMutation({ ...props });
  if (loading) {
    return <Loading />;
  }
  if (form === false || form === null) {
    return null;
  }

  return (
    <SimpleForm
      {...props}
      save={save}
      toolbar={form?.hasWorkflow ? <Toolbar /> : undefined}
      initialValues={form?.initialValues}
      sanitizeEmptyValues={form?.sanitizeEmptyValues}
      warnWhenUnsavedChanges={form?.warnWhenUnsavedChanges}
      redirect={form?.redirect}
    >
      {form?.inputs?.map(
        ({
          source,
          label,
          component,
          componentProps: { fullWidth, ...restComponentProps },
        }) => (
          <Component
            key={source}
            source={source}
            label={label}
            fullWidth={fullWidth}
            component={component}
            componentProps={{ fullWidth, ...restComponentProps }}
            components={{
              ...fields,
              ...inputs,
              ...customComponents.inputs,
              ...customComponents.fields,
            }}
          />
        )
      )}
    </SimpleForm>
  );
};

export default Form;
