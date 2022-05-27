import {
  ArrayInput,
  FormDataConsumer,
  SimpleFormIterator,
  required,
  useInput,
} from "react-admin";
import { Group, GroupItem, GroupTitle, useFieldLabel } from "friendsofbabba-ra";
import React, { useMemo } from "react";

import MunicipalityInput from "./MunicipalityInput";
import ProvinceInput from "./ProvinceInput";
import { get } from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { useFormState } from "react-final-form";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    paddingTop: 0,
    marginTop: 0,
  },
}));
const PublicAuthorityPartnersInput = ({ dep, ...props }) => {
  useInput({ ...props });
  const { values } = useFormState({ subscription: { values: true } });
  const fieldLabel = useFieldLabel({ resource: "public-authority-partners" });
  const classes = useStyles();
  const isGroup = useMemo(() => get(values, dep, false), [values, dep]);
  if (!isGroup) {
    return null;
  }
  return (
    <Group wrapper {...props}>
      <GroupTitle title={fieldLabel("title")} subTitle={fieldLabel("sub")} />
      <Group>
        <GroupItem lg={12} md={12} sm={12}>
          <ArrayInput label="" source={props.source} className={classes.root}>
            <SimpleFormIterator disableReordering>
              <FormDataConsumer>
                {({ getSource }) => (
                  <Group fullWidth>
                    <GroupItem lg={2} md={3} sm={4} xs={12}>
                      <ProvinceInput
                        label={fieldLabel("province")}
                        source={getSource("province")}
                        validate={required()}
                        disabled={props.disabled}
                      />
                    </GroupItem>
                    <GroupItem lg={6} md={7} sm={8} xs={12}>
                      <MunicipalityInput
                        label={fieldLabel("municipality_id")}
                        source={getSource("municipality_id")}
                        validate={required()}
                        deps={{ province: getSource("province") }}
                        disabled={props.disabled}
                      />
                    </GroupItem>
                  </Group>
                )}
              </FormDataConsumer>
            </SimpleFormIterator>
          </ArrayInput>
        </GroupItem>
      </Group>
    </Group>
  );
};
export default PublicAuthorityPartnersInput;
