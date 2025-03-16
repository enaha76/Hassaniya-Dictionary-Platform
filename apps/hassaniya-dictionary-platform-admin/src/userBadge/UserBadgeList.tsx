import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BADGE_TITLE_FIELD } from "../badge/BadgeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserBadgeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserBadges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Badge" source="badge.id" reference="Badge">
          <TextField source={BADGE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="earnedAt" label="Earned At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
