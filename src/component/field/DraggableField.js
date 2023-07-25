import React from 'react';

import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';

import { DragIndicator } from '@mui/icons-material';
import { Badge } from '@mui/material';

import { useDraggableContext } from '../../context/DraggableContext';

const DraggableField = ({ icon, source, showValue }) => {
	const {
		provided: { dragHandleProps }
	} = useDraggableContext();
	const record = useRecordContext();
	const value = record?.[source];
	return (
		<div {...dragHandleProps}>
			{React.cloneElement(icon, {
				sx: {
					cursor: 'grab'
				}
			})}
			{showValue && <Badge badgeContent={value} />}
		</div>
	);
};

DraggableField.defaultProps = {
	icon: <DragIndicator />,
	showValue: false
};

DraggableField.propTypes = {
	icon: PropTypes.element.isRequired,
	showValue: PropTypes.bool
};

export default DraggableField;
