import React from 'react';

import emptyImage from '../../assets/empty.svg';

const EmptyImage = ({ width = null, height }) => {
	return <img src={emptyImage} style={{ width, height }} alt="" />;
};

export default EmptyImage;
