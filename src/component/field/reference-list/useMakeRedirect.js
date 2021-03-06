import { useMemo } from "react";

/**
 *
 * @param {Object} props
 * @param {String} props.resource
 *  Parent resource name for which generate back redirect.
 *  For example, if you are handling "blog-post-comments" resource and
 *  you want to redirect to "blog-posts" resource, then you should pass "blog-posts".
 * @param {Object} props.record
 *  Parent record for which generate back redirect.
 *
 * @param {String} props.defaultRedirect
 *  Default redirect to use instead of the generated one.
 *
 * @returns {String}
 *  Returns back redirect that can be used using `useRedirect` hook from `react-admin`.
 *
 */
const useMakeRedirect = ({ resource, record, tab = 0, defaultRedirect }) =>
  useMemo(
    () =>
      defaultRedirect || tab > 0
        ? `/${resource}/${record?.id}/${tab}`
        : `/${resource}/${record?.id}`,
    [resource, record, tab, defaultRedirect]
  );

export default useMakeRedirect;
