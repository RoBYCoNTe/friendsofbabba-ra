import React, { useMemo } from "react";

import { useResourceContext } from "react-admin";

import { useCrudContext } from "../../data/cakephp/crud/CrudContext";
import * as buttons from "../button/index.js";
import FobEdit from "../form/CreateEdit";
import Component from "./Component";
import Form from "./Form";
import useCustomComponents from "./useCustomComponents.js";

const Edit = () => {
	const { getForm, components } = useCrudContext();
	const resource = useResourceContext();
	const customComponents = useCustomComponents(resource);
	const form = useMemo(() => getForm(resource), [resource, getForm]);
	const hasTitle = useMemo(() => form?.titles?.edit || form?.title, [form]);

	return (
		<FobEdit
			title={hasTitle && (form?.titles?.create || form?.title)}
			mode="edit"
			actions={
				form?.actions &&
				form?.actions.map(({ component, componentProps }, index) => (
					<Component
						key={index}
						component={component}
						componentProps={{
							resource,
							...componentProps,
						}}
						components={{
							...buttons,
							...components,
							...customComponents,
						}}
					/>
				))
			}
		>
			<Form />
		</FobEdit>
	);
};

export default Edit;
