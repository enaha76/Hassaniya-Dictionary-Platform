import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RoleList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Roles"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Permission Level" source="permissionLevel" />{" "}
      </Datagrid>
    </List>
  );
};
