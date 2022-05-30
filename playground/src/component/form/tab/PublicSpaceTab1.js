import { BooleanInput, required } from "react-admin";
import {
  DebouncedDateInput,
  DebouncedTextInput,
  FormTab,
  Group,
  GroupItem,
  GroupTitle,
  MediaInput,
  ValidationSummary,
  useFieldLabel,
} from "ra-friendsofbabba";
import React, { useCallback, useMemo } from "react";

import MapInput from "../../input/MapInput";
import MunicipalityInput from "../../input/MunicipalityInput";
import ProvinceInput from "../../input/ProvinceInput";
import PublicSpaceHandlerInput from "../../input/PublicSpaceHandlerInput";
import PublicSpaceTypeCustomInput from "../../input/PublicSpaceTypeCustomInput";
import PublicSpaceTypeInput from "../../input/PublicSpaceTypeInput";
import moment from "moment";
import { useFormState } from "react-final-form";

const PublicSpaceTab1 = ({ create, ...props }) => {
  const fieldLabel = useFieldLabel({ resource: "public-spaces" });
  const { values } = useFormState({ subscription: { values: true } });
  const isPrivate = useMemo(() => values?.handler === "private", [values]);
  const today = useMemo(() => new Date(), []);
  const futureDate = useCallback(
    (message = "ra.validation.future_date") =>
      (value) =>
        moment(value).isBefore(today) && message,
    [today]
  );
  return (
    <FormTab {...props}>
      <ValidationSummary />
      <GroupTitle title={fieldLabel("general")} />
      <Group fullWidth>
        <GroupItem lg={5}>
          <DebouncedTextInput
            source="name"
            maxLength={200}
            validate={required()}
          />
        </GroupItem>
        <GroupItem lg={3}>
          <PublicSpaceTypeInput
            source="public_space_type_id"
            validate={required()}
          />
        </GroupItem>
        <GroupItem lg={4}>
          <PublicSpaceTypeCustomInput
            source="public_space_type_custom"
            dep="public_space_type_id"
            maxLength={100}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={2} md={2}>
          <ProvinceInput source="province" validate={required()} />
        </GroupItem>
        <GroupItem lg={3} md={4}>
          <MunicipalityInput
            source="municipality_id"
            deps={{ province: "province" }}
            validate={required()}
          />
        </GroupItem>
        <GroupItem lg={6} md={6} sm={12}>
          <DebouncedTextInput
            source="address"
            validate={required()}
            maxLength={100}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={12} md={12} sm={12} xs={12}>
          <BooleanInput source="is_compliant" validate={required()} />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={12} md={12} sm={12}>
          <MapInput source="map" />
        </GroupItem>
      </Group>

      <GroupTitle title={fieldLabel("management")} />
      <Group>
        <GroupItem lg={12} md={12} sm={12}>
          <PublicSpaceHandlerInput
            source="handler"
            helperText={fieldLabel("handler.help")}
          />
        </GroupItem>
      </Group>
      {isPrivate && (
        <Group wrapper fullWidth>
          <GroupTitle title={fieldLabel("private")} />
          <Group>
            <GroupItem lg={8} md={8} sm={12}>
              <DebouncedTextInput
                source="private_name"
                helperText={fieldLabel("private_name.help")}
                maxLength={100}
              />
            </GroupItem>
            <GroupItem lg={4} md={4} sm={12}>
              <DebouncedTextInput
                source="private_code"
                helperText={fieldLabel("private_code.help")}
                maxLength={20}
              />
            </GroupItem>
          </Group>
          <Group>
            <GroupItem lg={12} md={12} sm={12}>
              <DebouncedTextInput
                source="private_rep_fullname"
                helperText={fieldLabel("private_rep_fullname.help")}
                maxLength={100}
              />
            </GroupItem>
            <GroupItem>
              <DebouncedDateInput
                source="private_expiry_date"
                helperText={fieldLabel("private_expiry_date.help")}
                validate={futureDate()}
              />
            </GroupItem>
          </Group>
          <Group>
            <GroupItem lg={12} md={12} sm={12}>
              <MediaInput
                title="filename"
                source="private_agreement_media"
                helperText={fieldLabel("private_agreement_media.help")}
              />
            </GroupItem>
          </Group>
          <Group>
            <GroupItem>
              <DebouncedTextInput source="private_website" maxLength={100} />
            </GroupItem>
            <GroupItem>
              <DebouncedTextInput source="private_facebook" maxLength={100} />
            </GroupItem>
            <GroupItem>
              <DebouncedTextInput source="private_instagram" maxLength={100} />
            </GroupItem>
          </Group>
        </Group>
      )}
    </FormTab>
  );
};
export default PublicSpaceTab1;
