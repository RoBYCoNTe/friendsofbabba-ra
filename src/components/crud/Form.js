import React, { useContext, useMemo } from "react";
import { Loading, SimpleForm } from "react-admin";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import useCustomComponents from "./useCustomComponents";
import fields from "../fields/index.js";
import inputs from "../inputs/index.js";
import Toolbar from "../workflow/forms/Toolbar";
import WorkflowInput from "../inputs/WorkflowInput";
import Component from "./Component";
import useSaveMutation from "../../data/useSaveMutation";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";

import TabbedForm from "../forms/TabbedForm";

const Form = ({ ...props }) => {
  const { getForm, loading } = useContext(CrudContext);
  const { getWorkflow } = useContext(WorkflowContext);
  const form = useMemo(
    () => getForm(props.resource),
    [props.resource, getForm]
  );
  const workflow = useMemo(
    () => (form?.useWorkflow ? getWorkflow(props.resource) : null),
    [props.resource, getWorkflow, form]
  );
  const customComponents = useCustomComponents(props.resource);
  const save = useSaveMutation({ ...props });
  if (loading) {
    return <Loading />;
  }
  if (form === false || form === null) {
    return null;
  }

  return (
    <Component
      {...props}
      save={save}
      toolbar={form?.useWorkflow ? <Toolbar /> : undefined}
      initialValues={form?.initialValues}
      sanitizeEmptyValues={form?.sanitizeEmptyValues}
      warnWhenUnsavedChanges={form?.warnWhenUnsavedChanges}
      redirect={form?.redirect}
      component={form?.component}
      componentProps={form?.componentProps}
      components={{ SimpleForm, TabbedForm }}
    >
      {form?.inputs?.map(
        ({
          source,
          label,
          component,
          useWorkflow,
          componentProps: { fullWidth, ...restComponentProps },
        }) =>
          form?.useWorkflow && workflow !== null && useWorkflow === true ? (
            <WorkflowInput
              key={source}
              source={source}
              fullWidth
              component={
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
              }
            />
          ) : (
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
    </Component>
  );
};

export default Form;
