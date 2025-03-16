import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ROOT_TITLE_FIELD } from "../root/RootTitle";

export const AiSuggestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="Suggested Definition" source="suggestedDefinition" />
        <TextField label="Suggested Word" source="suggestedWord" />
      </SimpleShowLayout>
    </Show>
  );
};
