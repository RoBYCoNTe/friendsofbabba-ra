import React from 'react';

import {
  ArrayField,
  ChipField,
  SingleFieldList,
} from 'react-admin';

const ChipArrayField = ({ chipSource, ...props }) => {
	return (
		<ArrayField {...props}>
			<SingleFieldList linkType={false}>
				<ChipField source={chipSource} />
			</SingleFieldList>
		</ArrayField>
	);
};
export default ChipArrayField;
