import React from 'react';

import { TextField } from 'react-admin';

const BoldField = (props) => {
	return <TextField sx={{ fontWeight: 'bold' }} {...props} />;
};

export default BoldField;
