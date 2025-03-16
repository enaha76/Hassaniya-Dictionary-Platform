import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ROOT_TITLE_FIELD } from "../root/RootTitle";

export const DictionaryEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"DictionaryEntries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Word" source="word" />{" "}
      </Datagrid>
    </List>
  );
};
