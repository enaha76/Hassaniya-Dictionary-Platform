import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Users"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Language Proficiency" source="languageProficiency" />
        <TextField label="Last Login" source="lastLogin" />
        <TextField label="Level" source="level" />
        <TextField label="Password Hash" source="passwordHash" />
        <TextField label="Points" source="points" />
        <TextField label="Profile Image" source="profileImage" />
        <TextField label="Username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};
