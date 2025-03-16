import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ChallengeRootList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ChallengeRoots"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Current Count" source="currentCount" />
        <TextField label="Description" source="description" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Target Count" source="targetCount" />{" "}
      </Datagrid>
    </List>
  );
};
