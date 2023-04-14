import React from "react";

import { Pagination as RaPagination } from "react-admin";

const Pagination = (props) => {
	return (
		<RaPagination rowsPerPageOptions={[10, 25, 50, 100, 200]} {...props} />
	);
};

Pagination.defaultProps = RaPagination.defaultProps;
Pagination.propTypes = RaPagination.propTypes;

export default Pagination;
