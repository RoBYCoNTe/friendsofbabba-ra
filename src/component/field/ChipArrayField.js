import { ArrayField, ChipField, SingleFieldList } from "react-admin";

import React from "react";

const ChipArrayField = ({ chipSource, ...props }) => {
  return (
    <ArrayField {...props}>
      <SingleFieldList linkType={false}>
        <ChipField source={chipSource} />
      </SingleFieldList>
    </ArrayField>
  );
};
export default ChipArrayField;
