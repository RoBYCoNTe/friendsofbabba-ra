import React, { useContext, useMemo } from "react";
import { TabbedForm as RaTabbedForm, FormTab } from "react-admin";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import useCustomComponents from "../crud/useCustomComponents";
import Component from "../crud/Component";
import WorkflowInput from "../inputs/WorkflowInput";
import fields from "../fields/index.js";
import inputs from "../inputs/index.js";

const TabbedForm = ({ tabs, ...props }) => {
  const { getForm } = useContext(CrudContext);
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
  return (
    <RaTabbedForm {...props}>
      {tabs.map(({ componentProps: { label }, ...tab }, index) => (
        <FormTab key={index} label={label}>
          {tab?.inputs?.map(
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
        </FormTab>
      ))}
    </RaTabbedForm>
  );
};
export default TabbedForm;
