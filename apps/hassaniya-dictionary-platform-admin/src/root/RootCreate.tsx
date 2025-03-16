import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AiSuggestionTitle } from "../aiSuggestion/AiSuggestionTitle";
import { ChallengeRootTitle } from "../challengeRoot/ChallengeRootTitle";
import { UserTitle } from "../user/UserTitle";
import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";

export const RootCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="aiSuggestions" reference="AiSuggestion">
          <SelectArrayInput
            optionText={AiSuggestionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="challenge.id"
          reference="ChallengeRoot"
          label="Challenge"
        >
          <SelectInput optionText={ChallengeRootTitle} />
        </ReferenceInput>
        <TextInput label="Classical Origin" source="classicalOrigin" />
        <ReferenceInput source="creator.id" reference="User" label="Creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="entries" reference="DictionaryEntry">
          <SelectArrayInput
            optionText={DictionaryEntryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Completed" source="isCompleted" />
        <TextInput label="Notes" source="notes" />
        <TextInput label="Root Letters" source="rootLetters" />
        <TextInput label="Status" source="status" />
        <TextInput label="Transliteration" source="transliteration" />
      </SimpleForm>
    </Create>
  );
};
