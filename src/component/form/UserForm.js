import React from 'react';

import { get } from 'lodash';
import {
	SimpleForm,
	useGetIdentity,
	useRedirect,
	useResourceContext
} from 'react-admin';

import useSaveMutation from '../../data/useSaveMutation';

const UserForm = ({ children, onSubmit, ...props }) => {
	const { refetch } = useGetIdentity();
	const resource = useResourceContext();
	const redirect = useRedirect();
	const { identity } = useGetIdentity();
	console.log(identity);
	const save = useSaveMutation({
		...props,
		refresh: undefined,
		redirect: 'list',
		onSuccess: async (response) => {
			if (identity?.id === response?.id) {
				localStorage.setItem('avatar', get(response, 'avatar.file.path'));
				localStorage.setItem('email', response.email);
				localStorage.setItem('roles', JSON.stringify(response.roles));
				localStorage.setItem('profile', JSON.stringify(response.profile));
				setTimeout(() => {
					refetch();
				}, 500);
			}
			redirect('list', resource);
		}
	});

	return (
		<SimpleForm {...props} onSubmit={save}>
			{children}
		</SimpleForm>
	);
};

export default UserForm;
