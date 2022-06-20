import * as buttons from "../button/index.js";
import * as fields from "../field/index.js";
import * as inputs from "../input/index.js";

import { Loading, SimpleForm } from "react-admin";
import React, { useContext, useMemo } from "react";

import Component from "./Component";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import Input from "../input/Input";
import TabbedForm from "../form/TabbedForm";
import Toolbar from "../form/Toolbar";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import useBackUrl from "../form/useBackUrl.js";
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
  const backUrl = useBackUrl({ ...props, ...form?.toolbar?.componentProps });
  const save = useSaveMutation({
    ...props,
    refresh: form?.refresh,
    redirect: backUrl || form?.redirect,
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
      toolbar={
        <Component
          component={form?.toolbar?.component}
          componentProps={{
            useWorkflow: form?.useWorkflow,
            useCustomButtons: form?.useCustomButtons,
            buttons: form?.buttons,
            ...form?.toolbar?.componentProps,
          }}
          components={{
            Toolbar,
            ...buttons,
            ...customComponents,
          }}
        />
      }
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
            <Input
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
                  componentProps={{
                    fullWidth,
                    components: {
                      ...fields,
                      ...inputs,
                      ...components,
                      ...customComponents,
                    },
                    ...restComponentProps,
                  }}
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
              componentProps={{
                fullWidth,
                components: {
                  ...fields,
                  ...inputs,
                  ...components,
                  ...customComponents,
                },
                ...restComponentProps,
              }}
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
