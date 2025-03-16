import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ExtractedWordTitle } from "../extractedWord/ExtractedWordTitle";
import { UserTitle } from "../user/UserTitle";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Document Name" source="documentName" />
        <TextInput label="Document Type" source="documentType" />
        <ReferenceArrayInput source="extractedWords" reference="ExtractedWord">
          <SelectArrayInput
            optionText={ExtractedWordTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="File Path" source="filePath" />
        <TextInput label="Language" source="language" />
        <NumberInput step={1} label="New Word Count" source="newWordCount" />
        <TextInput label="Processing Status" source="processingStatus" />
        <ReferenceInput source="uploader.id" reference="User" label="Uploader">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Word Count" source="wordCount" />
      </SimpleForm>
    </Create>
  );
};
