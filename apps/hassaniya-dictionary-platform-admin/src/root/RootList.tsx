import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CHALLENGEROOT_TITLE_FIELD } from "../challengeRoot/ChallengeRootTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const RootList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Roots"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
