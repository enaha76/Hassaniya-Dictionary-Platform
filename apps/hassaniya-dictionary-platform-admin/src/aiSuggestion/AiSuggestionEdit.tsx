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
import { RootTitle } from "../root/RootTitle";

export const AiSuggestionEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="Examples" source="examples" />
        <TextInput label="Form Type" source="formType" />
        <DateTimeInput label="Reviewed At" source="reviewedAt" />
        <ReferenceInput source="reviewer.id" reference="User" label="Reviewer">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="root.id" reference="Root" label="Root">
          <SelectInput optionText={RootTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
        <TextInput label="Suggested Definition" source="suggestedDefinition" />
        <TextInput label="Suggested Word" source="suggestedWord" />
      </SimpleForm>
    </Edit>
  );
};
