import * as React from "react";
import { isValidElement } from "react";

import { ResourceContextProvider } from "react-admin";
import { Route, Routes } from "react-router-dom";

import Create from "./CrudCreate";
import Edit from "./CrudEdit";
import List from "./CrudList";

const CrudResource = (props) => {
	const { create: Create, edit: Edit, list: List, name, show: Show } = props;

	return (
		<ResourceContextProvider value={name}>
			<Routes>
				{Create && (
					<Route
						path="create/*"
						element={isValidElement(Create) ? Create : <Create />}
					/>
				)}
				{Show && (
					<Route
						path=":id/show/*"
						element={isValidElement(Show) ? Show : <Show />}
					/>
				)}
				{Edit && (
					<Route
						path=":id/*"
						element={isValidElement(Edit) ? Edit : <Edit />}
					/>
				)}
				{List && (
					<Route path="/*" element={isValidElement(List) ? List : <List />} />
				)}
				{props.children}
			</Routes>
		</ResourceContextProvider>
	);
};

CrudResource.raName = "Resource";
CrudResource.defaultProps = {
	create: Create,
	edit: Edit,
	list: List,
};

CrudResource.registerResource = ({
	create,
	edit,
	icon,
	list,
	name,
	options,
	show,
	recordRepresentation,
	hasCreate,
	hasEdit,
	hasShow,
}) => ({
	name,
	options,
	hasList: !!list,
	hasCreate: !!create || !!hasCreate,
	hasEdit: !!edit || !!hasEdit,
	hasShow: !!show || !!hasShow,
	icon,
	recordRepresentation,
});

export default CrudResource;
