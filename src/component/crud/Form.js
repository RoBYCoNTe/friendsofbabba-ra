import * as fields from "../field/index.js";
import * as inputs from "../input/index.js";

import { Loading, SimpleForm } from "react-admin";
import React, { useContext, useMemo } from "react";

import Component from "./Component";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import TabbedForm from "../form/TabbedForm";
import Toolbar from "../form/Toolbar";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import WorkflowInput from "../input/WorkflowInput";
import useCustomComponents from "./useCustomComponents";
import useSaveMutation from "../../data/useSaveMutation";

const Form = ({ ...props }) => {
  const { getForm, loading, components } = useContext(CrudContext);
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

  const save = useSaveMutation({
    ...props,
    refresh: form?.refresh,
    redirect: form?.redirect,
  });
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
      components={{
        SimpleForm,
        TabbedForm,
        ...components,
        ...customComponents,
      }}
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
                    ...components,
                    ...customComponents,
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
                ...components,
                ...customComponents,
              }}
            />
          )
      )}
    </Component>
  );
};

export default Form;
