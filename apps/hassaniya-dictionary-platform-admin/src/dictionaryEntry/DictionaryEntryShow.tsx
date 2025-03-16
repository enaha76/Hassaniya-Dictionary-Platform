import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DICTIONARYENTRY_TITLE_FIELD } from "./DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ROOT_TITLE_FIELD } from "../root/RootTitle";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";

export const DictionaryEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Approval Date" source="approvalDate" />
        <ReferenceField label="Approval User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Audio File Path" source="audioFilePath" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Creator" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Challenge Word" source="isChallengeWord" />
        <ReferenceField label="Last Editor" source="user.id" reference="User">
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
        <ReferenceManyField
          reference="Activity"
          target="entryId"
          label="Activities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="activityDate" label="Activity Date" />
            <TextField label="Activity Type" source="activityType" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Points Earned" source="pointsEarned" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AiSuggestion"
          target="entryId"
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
          reference="Comment"
          target="entryId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Comment Text" source="commentText" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Parent Comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Definition"
          target="entryId"
          label="Definitions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Definition Text" source="definitionText" />
            <TextField label="Definition Type" source="definitionType" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Language" source="language" />
            <TextField label="Order Number" source="orderNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Example"
          target="entryId"
          label="Examples"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Context Notes" source="contextNotes" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Example Text" source="exampleText" />
            <TextField label="ID" source="id" />
            <TextField label="Translation" source="translation" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ExtractedWord"
          target="entryId"
          label="ExtractedWords"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Context" source="context" />
            <ReferenceField
              label="Document"
              source="document.id"
              reference="Document"
            >
              <TextField source={DOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is New" source="isNew" />
            <BooleanField label="Is Processed" source="isProcessed" />
            <TextField label="Word" source="word" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Submission"
          target="entryId"
          label="Submissions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
