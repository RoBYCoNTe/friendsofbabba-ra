import {
  DebouncedTextInput,
  Group,
  GroupItem,
  GroupTitle,
  MediaInput,
  useFieldLabel,
  useWorkflowInput,
} from "ra-friendsofbabba";

import MembershipTypeInput from "./MembershipTypeInput";
import { useCallback } from "react";

const OperationalContactInput = (props) => {
  const fieldLabel = useFieldLabel({ resource: "operational-contacts" });
  const fieldSource = useCallback(
    (source) => `${props.source}.${source}`,
    [props.source]
  );
  const { disabled } = useWorkflowInput({
    ...props,
  });
  return (
    <Group wrapper {...props}>
      <GroupTitle title={fieldLabel("operational_contact")} />
      <Group fullWidth>
        <GroupItem lg={6} md={6} sm={12}>
          <DebouncedTextInput
            source={fieldSource("fullname")}
            label={fieldLabel("fullname")}
            helperText={fieldLabel("fullname.help")}
            maxLength={200}
            disabled={disabled}
          />
        </GroupItem>
        <GroupItem lg={10} md={10} sm={12}>
          <DebouncedTextInput
            label={fieldLabel("description_of_motivations")}
            source={fieldSource("description_of_motivations")}
            helperText={fieldLabel("description_of_motivations.help")}
            maxLength={500}
            multiline
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={8} md={10} sm={12}>
          <MembershipTypeInput
            source={fieldSource("membership")}
            label={fieldLabel("membership")}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={12} md={12} sm={12}>
          <MediaInput
            title="filename"
            source={fieldSource("curriculum_media")}
            label={fieldLabel("curriclum_media")}
            helperText={fieldLabel("curriculum_media.help")}
            disabled={disabled}
          />
        </GroupItem>
      </Group>
    </Group>
  );
};
export default OperationalContactInput;
