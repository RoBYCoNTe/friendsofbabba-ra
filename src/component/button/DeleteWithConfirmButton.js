import {
  DeleteWithConfirmButton as RaDeleteWithConfirmButton,
  useTranslate,
} from "react-admin";
import React, { useMemo } from "react";

import PropTypes from "prop-types";

/**
 * Renders a delete button that ask for confirmation before deleting the record.
 *
 * @example
 * <Datagrid>
 *     <DeleteWithConfirmButton redirect="/list" />
 * </Datagrid>
 *
 * @param {Object} props
 * @param {string} props.redirect - The redirect path after the delete action.
 * @param {string} props.reference - The reference to the resource to delete.
 * @param {string} props.title - The title of the delete dialog.
 * @param {string} props.content - The message of the delete dialog.
 * @returns {React.ReactElement}
 */
const DeleteWithConfirmButton = ({ redirect, reference, ...props }) => {
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

  const { record } = props;
  if (!record) {
    // React-Admin original button soffer refreh's bug.
    // While trying to recover id of an non existing records it crash the application.
    // To avoid problems with this situation we have to return an empty component in this case.
    return null;
  }
  return (
    <RaDeleteWithConfirmButton
      {...props}
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
