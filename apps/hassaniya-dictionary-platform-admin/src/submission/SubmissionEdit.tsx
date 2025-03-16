import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";
import { UserTitle } from "../user/UserTitle";

export const SubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="entry.id"
          reference="DictionaryEntry"
          label="Entry"
        >
          <SelectInput optionText={DictionaryEntryTitle} />
        </ReferenceInput>
        <TextInput label="Feedback" source="feedback" />
        <TextInput label="Notes" source="notes" />
        <DateTimeInput label="Reviewed At" source="reviewedAt" />
        <ReferenceInput source="reviewer.id" reference="User" label="Reviewer">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
        <TextInput label="Submission Type" source="submissionType" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
