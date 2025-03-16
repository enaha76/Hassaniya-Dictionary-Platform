import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ActivityTitle } from "../activity/ActivityTitle";
import { AiSuggestionTitle } from "../aiSuggestion/AiSuggestionTitle";
import { UserTitle } from "../user/UserTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { DefinitionTitle } from "../definition/DefinitionTitle";
import { ExampleTitle } from "../example/ExampleTitle";
import { ExtractedWordTitle } from "../extractedWord/ExtractedWordTitle";
import { RootTitle } from "../root/RootTitle";
import { SubmissionTitle } from "../submission/SubmissionTitle";

export const DictionaryEntryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="activities" reference="Activity">
          <SelectArrayInput
            optionText={ActivityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="aiSuggestions" reference="AiSuggestion">
          <SelectArrayInput
            optionText={AiSuggestionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Approval Date" source="approvalDate" />
        <ReferenceInput
          source="approvalUser.id"
          reference="User"
          label="Approval User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Audio File Path" source="audioFilePath" />
        <ReferenceArrayInput source="comments" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="creator.id" reference="User" label="Creator">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="definitions" reference="Definition">
          <SelectArrayInput
            optionText={DefinitionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="examples" reference="Example">
          <SelectArrayInput
            optionText={ExampleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="extractedWords" reference="ExtractedWord">
          <SelectArrayInput
            optionText={ExtractedWordTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Challenge Word" source="isChallengeWord" />
        <ReferenceInput
          source="lastEditor.id"
          reference="User"
          label="Last Editor"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Origin Type" source="originType" />
        <TextInput label="Part Of Speech" source="partOfSpeech" />
        <ReferenceInput source="root.id" reference="Root" label="Root">
          <SelectInput optionText={RootTitle} />
        </ReferenceInput>
        <TextInput label="Status" source="status" />
        <ReferenceArrayInput source="submissions" reference="Submission">
          <SelectArrayInput
            optionText={SubmissionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Transliteration" source="transliteration" />
        <TextInput label="Verb Form" source="verbForm" />
        <TextInput label="Word" source="word" />
      </SimpleForm>
    </Create>
  );
};
