import React from 'react';

import {
  FormTab,
  TabbedForm as RaTabbedForm,
  useResourceContext,
} from 'react-admin';

import Component from '../crud/Component';
import useCustomComponents from '../crud/useCustomComponents';
import * as fields from '../field/index.js';
import * as inputs from '../input/index.js';

const TabbedForm = ({ tabs, ...props }) => {
	const resource = useResourceContext();
	const customComponents = useCustomComponents(resource);
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
						}) => (
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
