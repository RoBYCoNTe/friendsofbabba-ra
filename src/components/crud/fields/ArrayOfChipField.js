import React from "react";
import { ArrayField, ChipField, SingleFieldList } from "react-admin";

const ArrayOfChipField = ({ chipSource, ...props }) => {
  return (
    <ArrayField {...props}>
      <SingleFieldList>
        <ChipField source={chipSource} />
      </SingleFieldList>
    </ArrayField>
  );
};
export default ArrayOfChipField;
