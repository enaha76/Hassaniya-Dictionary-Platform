import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";
import { CommentTitle } from "./CommentTitle";
import { UserTitle } from "../user/UserTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Comment Text" source="commentText" />
        <ReferenceInput
          source="entry.id"
          reference="DictionaryEntry"
          label="Entry"
        >
          <SelectInput optionText={DictionaryEntryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="parentComment.id"
          reference="Comment"
          label="Parent Comment"
        >
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="replies" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
