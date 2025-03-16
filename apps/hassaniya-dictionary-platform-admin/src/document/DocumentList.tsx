import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Documents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Word Count" source="wordCount" />{" "}
      </Datagrid>
    </List>
  );
};
