import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SettingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Setting Group" source="settingGroup" />
        <TextField label="Setting Name" source="settingName" />
        <TextField label="Setting Value" source="settingValue" />
      </SimpleShowLayout>
    </Show>
  );
};
