import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";
import { UserTitle } from "../user/UserTitle";

export const SubmissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
