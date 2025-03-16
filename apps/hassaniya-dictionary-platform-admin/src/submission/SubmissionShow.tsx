import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const SubmissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
