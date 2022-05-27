import {
  DebouncedNumberInput,
  DebouncedTextInput,
  FormTab,
  Group,
  GroupItem,
  GroupTitle,
  ValidationSummary,
  useFieldLabel,
} from "friendsofbabba-ra";

import { InputAdornment } from "@material-ui/core";
import React from "react";

const PublicSpaceTab2 = ({ create, ...props }) => {
  const fieldLabel = useFieldLabel({ resource: "public-spaces" });

  return (
    <FormTab {...props}>
      <ValidationSummary />
      <GroupTitle title={fieldLabel("descriptions")} />
      <Group fullWidth>
        <GroupItem lg={12} md={12} sm={12}>
          <DebouncedTextInput source="description" maxLength={500} multiline />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={3} md={3} sm={6} xs={6}>
          <DebouncedNumberInput
            source="surface"
            helperText={fieldLabel("surface.help")}
            InputProps={{
              endAdornment: <InputAdornment position="end">mq</InputAdornment>,
            }}
          />
        </GroupItem>
        <GroupItem lg={3} md={3} sm={6} xs={6}>
          <DebouncedNumberInput
            source="target_surface"
            helperText={fieldLabel("target_surface.help")}
            InputProps={{
              endAdornment: <InputAdornment position="end">mq</InputAdornment>,
            }}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={6} md={6} sm={12}>
          <DebouncedTextInput
            source="description_of_activities"
            helperText={fieldLabel("description_of_activities.help")}
            maxLength={500}
            multiline
          />
        </GroupItem>
        <GroupItem lg={6} md={6} sm={12}>
          <DebouncedTextInput
            source="description_of_environments"
            helperText={fieldLabel("description_of_environments.help")}
            maxLength={500}
            multiline
          />
        </GroupItem>
        <GroupItem lg={6} md={6} sm={12}>
          <DebouncedTextInput
            source="description_of_activities_comp"
            helperText={fieldLabel("description_of_activities_comp.help")}
            maxLength={500}
            multiline
          />
        </GroupItem>
        <GroupItem lg={6} md={6} sm={12}>
          <DebouncedTextInput
            source="description_of_tools"
            helperText={fieldLabel("description_of_tools.help")}
            maxLength={500}
            multiline
          />
        </GroupItem>
        <GroupItem lg={6} md={6} sm={12}>
          <DebouncedTextInput
            source="description_of_motivations"
            helperText={fieldLabel("description_of_motivations.help")}
            maxLength={500}
            multiline
          />
        </GroupItem>
      </Group>
    </FormTab>
  );
};
export default PublicSpaceTab2;
