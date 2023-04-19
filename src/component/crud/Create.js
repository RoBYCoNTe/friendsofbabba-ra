import React, { useMemo } from "react";

import { useResourceContext } from "react-admin";

import { useCrudContext } from "../../data/cakephp/crud/CrudContext";
import FobCreate from "../form/CreateEdit";
import Form from "./Form";

const Create = () => {
	const { getForm } = useCrudContext();
	const resource = useResourceContext();
	const form = useMemo(() => getForm(resource), [resource, getForm]);
	const hasTitle = useMemo(() => form?.titles?.create || form?.title, [form]);
	return (
		<FobCreate
			title={hasTitle && (form?.titles?.create || form?.title)}
			mode="create"
		>
			<Form />
		</FobCreate>
	);
};

export default Create;
