import * as fields from "../fields/index.js";
import * as inputs from "../inputs/index.js";

import { FormTab, TabbedForm as RaTabbedForm } from "react-admin";
import React, { useContext, useMemo } from "react";

import Component from "../crud/Component";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";
import { WorkflowContext } from "../../data/workflow/WorkflowContext";
import WorkflowInput from "../inputs/WorkflowInput";
import useCustomComponents from "../crud/useCustomComponents";

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
                    ...customComponents,
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
