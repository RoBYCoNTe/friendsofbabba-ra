import React from 'react';

import PropTypes from 'prop-types';
import { EditButton } from 'react-admin';

import { Edit } from '@mui/icons-material';
import {
  Box,
  styled,
  useMediaQuery,
} from '@mui/material';

import { useCrudContext } from '../../data/crud/CrudContext';
import Component from '../crud/Component';
import * as fields from '../field/index';

const Root = styled(Box)({
	position: 'relative',
	'&:hover': {
		'& a': {
			display: 'flex'
		}
	}
});

const StyledButton = styled(EditButton)((theme) => ({
	display: 'none',
	position: 'absolute',
	right: 0,
	top: '50%',
	transform: 'translateY(-50%);'
}));

const DisplayField = ({ children, buttonProps, component, ...props }) => {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
	const { components: customComponents } = useCrudContext();

	return (
		<Root>
			{children ? (
				children
			) : (
				<Component
					{...props}
					components={{
						...customComponents,
						...fields
					}}
					component={component}
					componentProps={props}
				/>
			)}
			{!isMobile && <StyledButton {...buttonProps} />}
		</Root>
	);
};

DisplayField.defaultProps = {
	buttonProps: {
		label: 'ra.action.edit',
		variant: 'contained',
		color: 'primary',
		size: 'small',
		icon: <Edit fontSize="small" />
	},
	component: 'TextField'
};

DisplayField.propTypes = {
	buttonProps: PropTypes.object,
	component: PropTypes.string
};

export default DisplayField;
