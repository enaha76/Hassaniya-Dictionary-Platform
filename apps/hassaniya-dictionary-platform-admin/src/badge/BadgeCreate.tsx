import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserBadgeTitle } from "../userBadge/UserBadgeTitle";

export const BadgeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Badge Name" source="badgeName" />
        <TextInput label="Description" source="description" />
        <TextInput label="Icon Path" source="iconPath" />
        <NumberInput step={1} label="Required Points" source="requiredPoints" />
        <NumberInput
          step={1}
          label="Requirement Count"
          source="requirementCount"
        />
        <TextInput label="Requirement Type" source="requirementType" />
        <ReferenceArrayInput source="userBadges" reference="UserBadge">
          <SelectArrayInput
            optionText={UserBadgeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
