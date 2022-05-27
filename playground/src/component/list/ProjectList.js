import {
  CreateButton,
  DateField,
  FilterButton,
  List,
  SimpleList,
  TextField,
  TopToolbar,
} from "react-admin";
import {
  Datagrid,
  EditButton,
  Empty,
  SearchInput,
  StateCollectionInput,
  StateInput,
  useFieldLabel,
} from "friendsofbabba-ra";

import MunicipalityInput from "../input/MunicipalityInput";
import ProvinceInput from "../input/ProvinceInput";
import React from "react";
import { useMediaQuery } from "@material-ui/core";

const Actions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton label="resources.projects.buttons.add" variant="contained" />
  </TopToolbar>
);

const ProjectList = (props) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const paFieldLabel = useFieldLabel({ resource: "public-authorities" });
  return (
    <List
      {...props}
      empty={<Empty />}
      actions={<Actions />}
      bulkActionButtons={false}
      filters={[
        <SearchInput source="q" alwaysOn />,
        <StateInput source="state" alwaysOn />,
        <ProvinceInput source="province" label={paFieldLabel("province")} />,
        <MunicipalityInput
          source="municipality_id"
          label={paFieldLabel("municipality_id")}
          deps={{ province: "province" }}
        />,
      ]}
    >
      {isMobile ? (
        <SimpleList
          primaryText={(record) => record?.code}
          secondaryText={(record) =>
            `${record?.public_authority?.municipality?.name} (${record?.public_authority?.province})`
          }
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="code" />
          <TextField source="user.name" sortBy="UserProfiles.surname" />
          <TextField
            source="public_authority.province"
            sortBy="PublicAuthorities.province"
            label={paFieldLabel("province")}
          />
          <TextField
            source="public_authority.municipality.name"
            sortBy="Municipalities.name"
            label={paFieldLabel("municipality_id")}
          />
          {!isSmall && <DateField source="modified" showTime />}
          <StateCollectionInput source="state" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export default ProjectList;
