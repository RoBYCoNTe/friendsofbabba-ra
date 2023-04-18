import { useMemo } from 'react';

import { get } from 'lodash';
import { useRecordContext } from 'react-admin';

/**
 *
 * @param {Object} props
 * @param {String} props.backRedirect The redirect url to go back to
 * @param {String} props.backReferenceTarget The reference target to go back to
 * @param {String} props.backReference The reference to go back to
 * @param {Number} props.backTab The tab to go back to
 * @param {Object} props.record The parent record
 * @returns {String}
 */
const useBackUrl = ({
	backRedirect,
	backReferenceTarget,
	backReference,
	backTab = 1,
}) => {
	const record = useRecordContext();
	const referenceId = get(record, backReferenceTarget, 0);
	return useMemo(
		() =>
			referenceId === null || referenceId === 0
				? backRedirect
				: backTab > 0
				? `/${backReference}/${referenceId}/${backTab}`
				: `/${backReference}/${referenceId}`,
		[backRedirect, backReference, referenceId, backTab]
	);
};

export default useBackUrl;
