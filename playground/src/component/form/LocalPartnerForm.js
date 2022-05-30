import {
  DebouncedTextInput,
  Group,
  GroupItem,
  MediaInput,
  ReferenceToolbar,
  useFieldLabel,
  useSaveMutation,
} from "ra-friendsofbabba";
import { SimpleForm, required } from "react-admin";

const LocalPartnerForm = (props) => {
  const save = useSaveMutation({ ...props });
  const fieldLabel = useFieldLabel({ resource: "local-partners" });
  return (
    <SimpleForm
      {...props}
      toolbar={
        <ReferenceToolbar
          backTab={2}
          backReferenceTarget="project_id"
          backReference="projects"
        />
      }
      save={save}
    >
      <Group fullWidth>
        <GroupItem lg={8} md={10} sm={12}>
          <DebouncedTextInput
            source="name"
            helperText={fieldLabel("name.help")}
            maxLength={200}
            validate={required()}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            source="headquarters"
            helperText={fieldLabel("headquarters.help")}
            maxLength={200}
            multiline
            validate={required()}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            source="description"
            helperText={fieldLabel("description.help")}
            maxLength={400}
            multiline
            validate={required()}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={10} md={12} sm={12}>
          <DebouncedTextInput
            source="roles"
            helperText={fieldLabel("roles.help")}
            maxLength={500}
            multiline
            validate={required()}
          />
        </GroupItem>
      </Group>
      <Group fullWidth>
        <GroupItem lg={12} md={12} sm={12}>
          <MediaInput
            source="support_and_commitments_letter_media"
            title="filename"
            helperText={fieldLabel("support_and_commitments_letter_media.help")}
            validate={required()}
          />
        </GroupItem>
      </Group>
    </SimpleForm>
  );
};
export default LocalPartnerForm;
