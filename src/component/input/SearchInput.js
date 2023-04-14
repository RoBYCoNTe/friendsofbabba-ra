import React from 'react';

import { SearchInput as RaSearchInput } from 'react-admin';

const SearchInput = ({ sx = {}, ...props }) => {
	return (
		<RaSearchInput
			sx={(theme) => ({
				...sx,
				marginBottom: theme.spacing(0.5),
			})}
			{...props}
		/>
	);
};

SearchInput.defaultProps = RaSearchInput.defaultProps;
SearchInput.propTypes = RaSearchInput.propTypes;

export default SearchInput;
