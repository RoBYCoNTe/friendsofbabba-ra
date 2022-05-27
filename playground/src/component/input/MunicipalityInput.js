import { AutocompleteInput, ReferenceInput } from "react-admin";
import React, { useMemo } from "react";

import { get } from "lodash";
import { useFormState } from "react-final-form";

const MunicipalityInput = ({
  useProvinceFilterIfPossible = true,
  deps = [],
  ...props
}) => {
  const { values } = useFormState({ subscription: { values: true } });
  const filter = useMemo(
    () =>
      Object.keys(deps)?.reduce(
        (filter, dep) => ({
          ...filter,
          [dep]: get(values, get(deps, dep)),
        }),
        {}
      ),
    [deps, values]
  );
  return (
    <ReferenceInput
      {...props}
      filter={filter}
      reference="municipalities"
      suggestionLimit={5}
    >
      <AutocompleteInput optionText="name" />
    </ReferenceInput>
  );
};
export default MunicipalityInput;
