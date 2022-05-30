import {
  DebouncedTextInput,
  Group,
  GroupItem,
  GroupTitle,
  MediaInput,
  useFieldLabel,
  useWorkflowInput,
} from "ra-friendsofbabba";

import { BooleanInput } from "react-admin";
import MunicipalityInput from "./MunicipalityInput";
import ProvinceInput from "./ProvinceInput";
import PublicAuthorityPartnersInput from "./PublicAuthorityPartnersInput";
import React from "react";
import { required } from "ra-core";
import { useCallback } from "react";

const HeadingGroups = ({ fieldLabel, fieldSource, ...props }) => {
  const { visible, disabled } = useWorkflowInput({
    ...props,
    source: "public_authority.heading",
  });
  if (!visible) {
    return null;
  }
  return (
    <Group wrapper {...props}>
      <GroupTitle title={fieldLabel("heading")} />
      <Group>
        <GroupItem lg={3} md={3} xs={12}>
          <ProvinceInput
            source={fieldSource("province")}
            label={fieldLabel("province")}
            validate={required()}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <MunicipalityInput
            source={fieldSource("municipality_id")}
            label={fieldLabel("municipality_id")}
            deps={{ province: fieldSource("province") }}
            validate={required()}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("code")}
            label={fieldLabel("code")}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
    </Group>
  );
};
const RepGroup = ({ fieldLabel, fieldSource, ...props }) => {
  const { visible, disabled } = useWorkflowInput({
    ...props,
    source: "public_authority.rep",
  });
  if (!visible) {
    return null;
  }
  return (
    <Group wrapper {...props}>
      <GroupTitle title={fieldLabel("rep")} subTitle={fieldLabel("rep.help")} />
      <Group>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("rep_name")}
            label={fieldLabel("rep_name")}
            helperText={fieldLabel("rep_name.helper")}
            maxLength={50}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("rep_surname")}
            label={fieldLabel("rep_surname")}
            helperText={fieldLabel("rep_surname.helper")}
            maxLength={50}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
    </Group>
  );
};
const AccountableGroup = ({ fieldLabel, fieldSource, ...props }) => {
  const { visible, disabled } = useWorkflowInput({
    ...props,
    source: "public_authority.accountable",
  });
  if (!visible) {
    return null;
  }
  return (
    <Group wrapper {...props}>
      <GroupTitle
        title={fieldLabel("accountable")}
        subTitle={fieldLabel("accountable.help")}
      />
      <Group>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("accountable_name")}
            label={fieldLabel("accountable_name")}
            maxLength={50}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("accountable_surname")}
            label={fieldLabel("accountable_surname")}
            maxLength={50}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("accountable_fiscal_code")}
            label={fieldLabel("accountable_fiscal_code")}
            maxLength={16}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <Group>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("accountable_role")}
            label={fieldLabel("accountable_role")}
            maxLength={50}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("accountable_email")}
            label={fieldLabel("accountable_email")}
            maxLength={100}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <Group>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("accountable_phone")}
            label={fieldLabel("accountable_phone")}
            maxLength={30}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem>
          <DebouncedTextInput
            source={fieldSource("accountable_mobile")}
            label={fieldLabel("accountable_mobile")}
            maxLength={30}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <Group>
        <GroupItem lg={8} md={12}>
          <DebouncedTextInput
            source={fieldSource("email")}
            label={fieldLabel("email")}
            maxLength={100}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <Group>
        <GroupItem lg={12} md={12}>
          <MediaInput
            title="filename"
            accept=".pdf"
            source={fieldSource("expression_of_interest_media")}
            label={fieldLabel("expression_of_interest_media")}
            helperText={fieldLabel("expression_of_interest_media.helper")}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <Group>
        <GroupItem lg={12} md={12} sm={12}>
          <BooleanInput
            source={fieldSource("is_group")}
            label={fieldLabel("is_group")}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <PublicAuthorityPartnersInput
        source={fieldSource("public_authority_partners")}
        dep={fieldSource("is_group")}
        disabled={disabled}
        fullWidth
      />
    </Group>
  );
};
const PublicAuthorityInput = (props) => {
  const fieldLabel = useFieldLabel({ resource: "public-authorities" });
  const fieldSource = useCallback(
    (source) => `${props.source}.${source}`,
    [props.source]
  );

  return (
    <Group wrapper {...props} {...{ fieldLabel, fieldSource }}>
      <HeadingGroups />
      <RepGroup />
      <AccountableGroup />
    </Group>
  );
};

export default PublicAuthorityInput;
