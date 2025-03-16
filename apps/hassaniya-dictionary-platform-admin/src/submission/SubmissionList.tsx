import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SubmissionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Submissions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Entry"
          source="dictionaryentry.id"
          reference="DictionaryEntry"
        >
          <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Feedback" source="feedback" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <TextField label="Reviewed At" source="reviewedAt" />
        <ReferenceField label="Reviewer" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Status" source="status" />
        <TextField label="Submission Type" source="submissionType" />
        <DateField source="submittedAt" label="Submitted At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
