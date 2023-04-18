import React, { useMemo } from 'react';

import {
  useRecordContext,
  useResourceContext,
} from 'react-admin';

import useWorkflowInput from '../../data/workflow/useWorkflowInput';

const Input = ({ component, disabled, ...props }) => {
	const _resource = useResourceContext();
	const _record = useRecordContext(props);

	const { resource, source, record } = useMemo(() => {
		const resource = _resource || component.props.resource;
		const source = props?.source || component.props.source;
		const record = _record || component.props.record;
		return { resource, source, record };
	}, [props, component, _record, _resource]);

	const { visible, disabled: disable } = useWorkflowInput({
		...props,
		resource,
		source,
		record,
	});

	if (!visible) {
		return null;
	}
	return React.cloneElement(component, {
		...component.props,
		...props,
		disabled: disable,
		resource,
		source,
		record,
	});
};
export default Input;
