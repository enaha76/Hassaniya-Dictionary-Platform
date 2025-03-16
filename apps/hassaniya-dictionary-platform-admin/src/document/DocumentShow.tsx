import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { DOCUMENT_TITLE_FIELD } from "./DocumentTitle";
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DocumentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Document Name" source="documentName" />
        <TextField label="Document Type" source="documentType" />
        <TextField label="File Path" source="filePath" />
        <TextField label="ID" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="New Word Count" source="newWordCount" />
        <TextField label="Processing Status" source="processingStatus" />
        <DateField source="uploadedAt" label="Uploaded At" />
        <ReferenceField label="Uploader" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Word Count" source="wordCount" />
        <ReferenceManyField
          reference="ExtractedWord"
          target="documentId"
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
      </SimpleShowLayout>
    </Show>
  );
};
