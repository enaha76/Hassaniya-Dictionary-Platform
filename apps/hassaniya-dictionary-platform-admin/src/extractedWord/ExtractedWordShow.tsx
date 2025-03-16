import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import { DOCUMENT_TITLE_FIELD } from "../document/DocumentTitle";
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";

export const ExtractedWordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
