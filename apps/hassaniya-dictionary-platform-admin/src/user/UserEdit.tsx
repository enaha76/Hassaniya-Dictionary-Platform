import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { ActivityTitle } from "../activity/ActivityTitle";
import { DictionaryEntryTitle } from "../dictionaryEntry/DictionaryEntryTitle";
import { AuditLogTitle } from "../auditLog/AuditLogTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { DefinitionTitle } from "../definition/DefinitionTitle";
import { ExampleTitle } from "../example/ExampleTitle";
import { RootTitle } from "../root/RootTitle";
import { AiSuggestionTitle } from "../aiSuggestion/AiSuggestionTitle";
import { SubmissionTitle } from "../submission/SubmissionTitle";
import { DocumentTitle } from "../document/DocumentTitle";
import { UserBadgeTitle } from "../userBadge/UserBadgeTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="activities" reference="Activity">
          <SelectArrayInput
            optionText={ActivityTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="approvedEntries"
          reference="DictionaryEntry"
        >
          <SelectArrayInput
            optionText={DictionaryEntryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="auditLogs" reference="AuditLog">
          <SelectArrayInput
            optionText={AuditLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="comments" reference="Comment">
          <SelectArrayInput
            optionText={CommentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="createdDefinitions" reference="Definition">
          <SelectArrayInput
            optionText={DefinitionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="createdEntries"
          reference="DictionaryEntry"
        >
          <SelectArrayInput
            optionText={DictionaryEntryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="createdExamples" reference="Example">
          <SelectArrayInput
            optionText={ExampleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="createdRoots" reference="Root">
          <SelectArrayInput
            optionText={RootTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="editedEntries" reference="DictionaryEntry">
          <SelectArrayInput
            optionText={DictionaryEntryTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" />
        <TextInput label="Full Name" source="fullName" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Language Proficiency" source="languageProficiency" />
        <DateTimeInput label="Last Login" source="lastLogin" />
        <NumberInput step={1} label="Level" source="level" />
        <TextInput label="Password Hash" source="passwordHash" />
        <NumberInput step={1} label="Points" source="points" />
        <TextInput label="Profile Image" source="profileImage" />
        <ReferenceArrayInput
          source="reviewedSuggestions"
          reference="AiSuggestion"
        >
          <SelectArrayInput
            optionText={AiSuggestionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="reviews" reference="Submission">
          <SelectArrayInput
            optionText={SubmissionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="submissions" reference="Submission">
          <SelectArrayInput
            optionText={SubmissionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="uploadedDocuments" reference="Document">
          <SelectArrayInput
            optionText={DocumentTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="userBadges" reference="UserBadge">
          <SelectArrayInput
            optionText={UserBadgeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="userRoles" reference="UserRole">
          <SelectArrayInput
            optionText={UserRoleTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
