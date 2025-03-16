import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BadgeList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Badges"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Badge Name" source="badgeName" />
        <TextField label="Description" source="description" />
        <TextField label="Icon Path" source="iconPath" />
        <TextField label="ID" source="id" />
        <TextField label="Required Points" source="requiredPoints" />
        <TextField label="Requirement Count" source="requirementCount" />
        <TextField label="Requirement Type" source="requirementType" />{" "}
      </Datagrid>
    </List>
  );
};
