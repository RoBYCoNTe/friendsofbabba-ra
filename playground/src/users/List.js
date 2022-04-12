import * as React from "react";

import {
  ArrayField,
  ChipField,
  Datagrid,
  EditButton,
  List,
  SearchInput,
  SimpleList,
  SingleFieldList,
  TextField,
} from "react-admin";

import PeopleIcon from "@material-ui/icons/People";
import { useMediaQuery } from "@material-ui/core";

export const UserIcon = PeopleIcon;

const UserList = ({ permissions, ...props }) => (
  <List
    {...props}
    filters={[<SearchInput source="q" alwaysOn />]}
    sort={{ field: "name", order: "ASC" }}
  >
    {useMediaQuery((theme) => theme.breakpoints.down("sm")) ? (
      <SimpleList
        primaryText={(record) => record.name}
        secondaryText={(record) =>
          permissions === "admin" ? record.role : null
        }
      />
    ) : (
      <Datagrid optimized>
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="profile.name" />
        <ArrayField source="roles">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <TextField source="profile.surname" />
        <EditButton />
      </Datagrid>
    )}
  </List>
);

export default UserList;
