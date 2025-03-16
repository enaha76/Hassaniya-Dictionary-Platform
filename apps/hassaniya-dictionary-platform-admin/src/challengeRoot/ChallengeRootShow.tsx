import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { CHALLENGEROOT_TITLE_FIELD } from "./ChallengeRootTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ChallengeRootShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Current Count" source="currentCount" />
        <TextField label="Description" source="description" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Target Count" source="targetCount" />
        <ReferenceManyField reference="Root" target="challengeId" label="Roots">
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
