import React, { useMemo } from 'react';

import PropTypes from 'prop-types';
import {
  DeleteWithConfirmButton as RaDeleteWithConfirmButton,
  useRecordContext,
  useTranslate,
} from 'react-admin';

/**
 * Renders a delete button that ask for confirmation before deleting the record.
 *
 * @example
 * <Datagrid>
 *     <DeleteWithConfirmButton redirect="/list" />
 * </Datagrid>
 *
 * @param {Object} props
 * @param {String} props.redirect
 *  The redirect path after the delete action.
 *
 * @param {String} props.reference
 *  The reference to the resource to delete.
 *
 * @param {String} props.title
 *  The title of the delete dialog.
 *
 * @param {String} props.content
 *  The message of the delete dialog.
 *
 * @returns {JSX.Element}
 */
const DeleteWithConfirmButton = ({ redirect, reference, ...props }) => {
	const record = useRecordContext(props);
	const translate = useTranslate();
	const { confirmTitle, confirmContent } = useMemo(() => {
		const title = props.title
			? typeof props.title === "function"
				? props.confirmTitle(props.record, translate)
				: props.title
			: translate("ra.title.confirm_delete");
		const content = props.confirmTitle
			? typeof props.content === "function"
				? props.confirmTitle(props.record, translate)
				: props.content
			: translate("ra.message.confirm_delete");
		return { confirmTitle: title, confirmContent: content };
	}, [props, translate]);

	if (!record) {
		// React-Admin original button soffer refreh's bug.
		// While trying to recover id of an non existing records it crash the application.
		// To avoid problems with this situation we have to return an empty component in this case.
		return null;
	}

	return (
		<RaDeleteWithConfirmButton
			{...props}
			key={redirect}
			redirect={redirect}
			confirmTitle={confirmTitle}
			confirmContent={confirmContent}
		/>
	);
};

export default DeleteWithConfirmButton;

const DeleteWithConfirmButtonProps = DeleteWithConfirmButton;

DeleteWithConfirmButtonProps.propTypes = {
	redirect: PropTypes.string,
	reference: PropTypes.string,
	record: PropTypes.object,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};
