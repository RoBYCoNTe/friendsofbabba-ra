import React, { useCallback } from 'react';

import { SaveButton } from 'react-admin';
import { useFormContext } from 'react-hook-form';

const StateButton = ({ state, ...props }, ref) => {
	const { setValue } = useFormContext();
	const handleClick = useCallback(() => {
		setValue("state", state?.code);
	}, [state, setValue]);

	return (
		<SaveButton
			color="primary"
			onClick={handleClick}
			label={state?.label}
			{...props}
		/>
	);
};

export default React.forwardRef(StateButton);
