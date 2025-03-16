import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ActivityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Activities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="activityDate" label="Activity Date" />
        <TextField label="Activity Type" source="activityType" />
        <TextField label="Description" source="description" />
        <ReferenceField
          label="Entry"
          source="dictionaryentry.id"
          reference="DictionaryEntry"
        >
          <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Points Earned" source="pointsEarned" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
