import React, { Fragment } from 'react';

import { TextField } from 'react-admin';

import RecordInput from './RecordInput';

const LanguageMessageInput = (props) => (
	<Fragment>
		<TextField {...props} source="code" variant="caption" fullWidth />
		<RecordInput {...props} fullWidth />
	</Fragment>
);
export default LanguageMessageInput;
