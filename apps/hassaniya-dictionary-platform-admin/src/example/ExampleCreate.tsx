import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";

export const ExampleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Context Notes" source="contextNotes" />
        <ReferenceInput source="creator.id" reference="User" label="Creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="entry.id"
          reference="DictionaryEntry"
          label="Entry"
        >
          <SelectInput optionText={DictionaryEntryTitle} />
        </ReferenceInput>
        <TextInput label="Example Text" source="exampleText" />
        <TextInput label="Translation" source="translation" />
      </SimpleForm>
    </Create>
  );
};
