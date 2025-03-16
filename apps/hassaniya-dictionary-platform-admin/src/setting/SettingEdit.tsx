import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Setting Group" source="settingGroup" />
        <TextInput label="Setting Name" source="settingName" />
        <TextInput label="Setting Value" source="settingValue" />
      </SimpleForm>
    </Edit>
  );
};
