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
import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { COMMENT_TITLE_FIELD } from "./CommentTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CommentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Comments"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
