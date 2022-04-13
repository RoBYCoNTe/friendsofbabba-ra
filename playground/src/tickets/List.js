import * as React from "react";
import { List as RaList, Datagrid, TextField } from "react-admin";
const List = (props) => (
  <RaList {...props}>
    <Datagrid>
      <TextField source="subject" />
    </Datagrid>
  </RaList>
);

export default List;
