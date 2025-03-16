import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";

export const DefinitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="creator.id" reference="User" label="Creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Definition Text" source="definitionText" />
        <TextInput label="Definition Type" source="definitionType" />
        <ReferenceInput
          source="entry.id"
          reference="DictionaryEntry"
          label="Entry"
        >
          <SelectInput optionText={DictionaryEntryTitle} />
        </ReferenceInput>
        <TextInput label="Language" source="language" />
        <NumberInput step={1} label="Order Number" source="orderNumber" />
      </SimpleForm>
    </Edit>
  );
};
