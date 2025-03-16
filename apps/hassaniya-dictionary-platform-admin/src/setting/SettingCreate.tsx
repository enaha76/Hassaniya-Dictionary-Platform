import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SettingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Setting Group" source="settingGroup" />
        <TextInput label="Setting Name" source="settingName" />
        <TextInput label="Setting Value" source="settingValue" />
      </SimpleForm>
    </Create>
  );
};
