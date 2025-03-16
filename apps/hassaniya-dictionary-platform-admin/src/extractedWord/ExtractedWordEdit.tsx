import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { DocumentTitle } from "../document/DocumentTitle";
import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";

export const ExtractedWordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Context" source="context" />
        <ReferenceInput
          source="document.id"
          reference="Document"
          label="Document"
        >
          <SelectInput optionText={DocumentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="entry.id"
          reference="DictionaryEntry"
          label="Entry"
        >
          <SelectInput optionText={DictionaryEntryTitle} />
        </ReferenceInput>
        <BooleanInput label="Is New" source="isNew" />
        <BooleanInput label="Is Processed" source="isProcessed" />
        <TextInput label="Word" source="word" />
      </SimpleForm>
    </Edit>
  );
};
