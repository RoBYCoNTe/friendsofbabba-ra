import { useFormContext, useFormGroupContext } from "ra-core";

import { cakephpErrorMapper } from "../../data/cakephp/createErrorMapper";
import { get } from "lodash";
import { useFormState } from "react-final-form";
import { useMemo } from "react";

const useValidationSummary = (
  { groupName, source } = {
    groupName: undefined,
    source: "validationErrors",
  }
) => {
  const { submitErrors } = useFormState({
    subscription: {
      submitFailed: true,
      submitErrors: true,
    },
  });
  const formContext = useFormContext();
  const defaultGroupName = useFormGroupContext();
  const group = groupName || defaultGroupName;

  const { values } = useFormState({
    subscription: {
      values: true,
    },
  });
  return useMemo(() => {
    const validationErrors = get(values, source);
    const loading = validationErrors === undefined && values.id > 0;
    const mode = values.id > 0 ? "edit" : "create";
    const fields = formContext.getGroupFields(group);

    const errors = fields.filter(
      (field) =>
        get(submitErrors, field) != null || get(validationErrors, field) != null
    );

    const errorMaps =
      errors.length > 0
        ? errors.reduce(
            (acc, field) => ({
              ...acc,
              [field]: get(submitErrors, field) || get(validationErrors, field),
            }),
            {}
          )
        : {};
    const errorMap = cakephpErrorMapper(errorMaps);
    return {
      errorsCount: Object.keys(errorMap).length,
      errorKeys: errors,
      errorMap,
      loading,
      mode,
    };
  }, [submitErrors, formContext, values, source, group]);
};

export default useValidationSummary;
