import Workflow from "./Workflow";
import { get } from "lodash";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const useWorkflow = ({ resource }) => {
  const item = useSelector((state) =>
    resource ? get(state, `workflow.items.${resource}`) : undefined
  );
  const workflow = useMemo(
    () => (item ? new Workflow(item) : undefined),
    [item]
  );
  return workflow;
};

export default useWorkflow;
