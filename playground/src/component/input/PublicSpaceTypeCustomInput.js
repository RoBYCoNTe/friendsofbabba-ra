import React, { useMemo } from "react";

import { DebouncedTextInput } from "friendsofbabba-ra";
import PropTypes from "prop-types";
import PublicSpaceTypeInput from "./PublicSpaceTypeInput";
import { get } from "lodash";
import { useFormState } from "react-final-form";
import { useSelector } from "react-redux";

const PublicSpaceTypeCustomInput = ({ dep, ...props }) => {
  const data = useSelector((state) =>
    get(state, "admin.resources.public-space-types.data")
  );
  const { values } = useFormState({ subscription: { values: true } });
  const isCustom = useMemo(
    () => get(data, `${get(values, dep)}.is_custom`, false),
    [dep, values, data]
  );
  if (!isCustom) {
    return null;
  }
  return <DebouncedTextInput {...props} />;
};
PublicSpaceTypeInput.propTypes = {
  dep: PropTypes.string,
};
export default PublicSpaceTypeCustomInput;
