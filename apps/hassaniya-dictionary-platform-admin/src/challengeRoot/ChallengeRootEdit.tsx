import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RootTitle } from "../root/RootTitle";

export const ChallengeRootEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Current Count" source="currentCount" />
        <TextInput label="Description" source="description" />
        <DateTimeInput label="End Date" source="endDate" />
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="roots" reference="Root">
          <SelectArrayInput
            optionText={RootTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <NumberInput step={1} label="Target Count" source="targetCount" />
      </SimpleForm>
    </Edit>
  );
};
