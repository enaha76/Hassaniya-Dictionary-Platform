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
} from "react-admin";

import { BADGE_TITLE_FIELD } from "./BadgeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BadgeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Badge Name" source="badgeName" />
        <TextField label="Description" source="description" />
        <TextField label="Icon Path" source="iconPath" />
        <TextField label="ID" source="id" />
        <TextField label="Required Points" source="requiredPoints" />
        <TextField label="Requirement Count" source="requirementCount" />
        <TextField label="Requirement Type" source="requirementType" />
        <ReferenceManyField
          reference="UserBadge"
          target="badgeId"
          label="UserBadges"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Badge" source="badge.id" reference="Badge">
              <TextField source={BADGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="earnedAt" label="Earned At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
