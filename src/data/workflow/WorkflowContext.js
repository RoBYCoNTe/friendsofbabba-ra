import React, { createContext, useCallback, useEffect, useState } from "react";
import useWorkflow from "./useWorkflow";
import { get } from "lodash";
import Workflow from "./Workflow";

export const WorkflowContext = createContext({});

export const WorkflowProvider = ({ children, apiUrl }) => {
  const [workflow, setWorkflow] = useState({});
  const { data } = useWorkflow({ apiUrl });
  const getWorkflow = useCallback(
    (resource) => get(workflow, resource),
    [workflow]
  );
  useEffect(() => {
    if (!data) {
      return;
    }
    const resources = Object.keys(data).reduce(
      (workflows, name) => ({
        ...workflows,
        [name]: new Workflow(data[name]),
      }),
      {}
    );
    setWorkflow(resources);
  }, [data]);
  return (
    <WorkflowContext.Provider value={{ workflows: data, getWorkflow }}>
      {children}
    </WorkflowContext.Provider>
  );
};
