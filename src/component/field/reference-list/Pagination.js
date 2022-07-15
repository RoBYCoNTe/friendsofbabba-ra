import {
  Pagination as RaPagination,
  useListPaginationContext,
} from "react-admin";

import React from "react";

/**
 * Custom paginator designed to work with `ReferenceManyField` component.
 * This paginator check whether there are any records in the list and display
 * paginator only if there is data to display.
 *
 * This behavior is necessary to avoid "duplicated" empty messages provided by
 * `ReferenceManyField` and `Pagination` components. Should I create a PR to
 * fix this?
 *
 * @param {Object} props
 *  Receive the same props as `Pagination` component.
 *
 * @returns {JSX.Element}
 */
const Pagination = (props) => {
  // We have to handle this situation to avoid problems
  // with multiple "empty message strings" provided by react-admin
  // I've to create a PR to the primary project?
  const { total } = useListPaginationContext(props);
  if (total === 0) {
    return null;
  }
  return <RaPagination {...props} />;
};
export default Pagination;
