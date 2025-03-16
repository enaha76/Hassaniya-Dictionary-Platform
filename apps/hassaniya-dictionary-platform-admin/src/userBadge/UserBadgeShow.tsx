import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BADGE_TITLE_FIELD } from "../badge/BadgeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserBadgeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Badge" source="badge.id" reference="Badge">
          <TextField source={BADGE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="earnedAt" label="Earned At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
