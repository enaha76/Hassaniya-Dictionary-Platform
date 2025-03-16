import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ROOT_TITLE_FIELD } from "../root/RootTitle";

export const AiSuggestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"AiSuggestions"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Suggested Definition" source="suggestedDefinition" />
        <TextField label="Suggested Word" source="suggestedWord" />{" "}
      </Datagrid>
    </List>
  );
};
