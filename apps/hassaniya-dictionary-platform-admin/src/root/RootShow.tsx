import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ROOT_TITLE_FIELD } from "./RootTitle";
import { CHALLENGEROOT_TITLE_FIELD } from "../challengeRoot/ChallengeRootTitle";

export const RootShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Challenge"
          source="challengeroot.id"
          reference="ChallengeRoot"
        >
          <TextField source={CHALLENGEROOT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Classical Origin" source="classicalOrigin" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Creator" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Completed" source="isCompleted" />
        <TextField label="Notes" source="notes" />
        <TextField label="Root Letters" source="rootLetters" />
        <TextField label="Status" source="status" />
        <TextField label="Transliteration" source="transliteration" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AiSuggestion"
          target="rootId"
          label="AiSuggestions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Examples" source="examples" />
            <TextField label="Form Type" source="formType" />
            <TextField label="ID" source="id" />
            <TextField label="Reviewed At" source="reviewedAt" />
            <ReferenceField label="Reviewer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Root" source="root.id" reference="Root">
              <TextField source={ROOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField
              label="Suggested Definition"
              source="suggestedDefinition"
            />
            <TextField label="Suggested Word" source="suggestedWord" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DictionaryEntry"
          target="rootId"
          label="DictionaryEntries"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Approval Date" source="approvalDate" />
            <ReferenceField
              label="Approval User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Audio File Path" source="audioFilePath" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Challenge Word" source="isChallengeWord" />
            <ReferenceField
              label="Last Editor"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Origin Type" source="originType" />
            <TextField label="Part Of Speech" source="partOfSpeech" />
            <ReferenceField label="Root" source="root.id" reference="Root">
              <TextField source={ROOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Transliteration" source="transliteration" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Verb Form" source="verbForm" />
            <TextField label="Word" source="word" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
