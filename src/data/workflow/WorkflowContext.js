import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import useWorkflow from './useWorkflow';
import Workflow from './Workflow';

export const WorkflowContext = createContext({});

export const WorkflowProvider = ({ children, apiUrl }) => {
	const [workflow, setWorkflow] = useState({});
	const { data } = useWorkflow({ apiUrl });
	const getWorkflow = useCallback(
		(resource) => workflow?.[resource],
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
		<WorkflowContext.Provider value={{ apiUrl, workflows: data, getWorkflow }}>
			{children}
		</WorkflowContext.Provider>
	);
};

export const useWorkflowContext = () => useContext(WorkflowContext);
