import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DICTIONARYENTRY_TITLE_FIELD } from "../dictionaryEntry/DictionaryEntryTitle";
import { USER_TITLE_FIELD } from "./UserTitle";
import { ROOT_TITLE_FIELD } from "../root/RootTitle";
import { COMMENT_TITLE_FIELD } from "../comment/CommentTitle";
import { CHALLENGEROOT_TITLE_FIELD } from "../challengeRoot/ChallengeRootTitle";
import { BADGE_TITLE_FIELD } from "../badge/BadgeTitle";
import { ROLE_TITLE_FIELD } from "../role/RoleTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Language Proficiency" source="languageProficiency" />
        <TextField label="Last Login" source="lastLogin" />
        <TextField label="Level" source="level" />
        <TextField label="Password Hash" source="passwordHash" />
        <TextField label="Points" source="points" />
        <TextField label="Profile Image" source="profileImage" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Activity"
          target="userId"
          label="Activities"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="activityDate" label="Activity Date" />
            <TextField label="Activity Type" source="activityType" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Points Earned" source="pointsEarned" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DictionaryEntry"
          target="approvalUserId"
          label="DictionaryEntries"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Approval Date" source="approvalDate" />
            <ReferenceField
              label="Approval User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Audio File Path" source="audioFilePath" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Challenge Word" source="isChallengeWord" />
            <ReferenceField
              label="Last Editor"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Origin Type" source="originType" />
            <TextField label="Part Of Speech" source="partOfSpeech" />
            <ReferenceField label="Root" source="root.id" reference="Root">
              <TextField source={ROOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Transliteration" source="transliteration" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Verb Form" source="verbForm" />
            <TextField label="Word" source="word" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AuditLog"
          target="userId"
          label="AuditLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <DateField source="actionTime" label="Action Time" />
            <TextField label="Details" source="details" />
            <TextField label="Entity Id" source="entityId" />
            <TextField label="Entity Type" source="entityType" />
            <TextField label="ID" source="id" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Comment"
          target="userId"
          label="Comments"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Comment Text" source="commentText" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Parent Comment"
              source="comment.id"
              reference="Comment"
            >
              <TextField source={COMMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Definition"
          target="creatorId"
          label="Definitions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Definition Text" source="definitionText" />
            <TextField label="Definition Type" source="definitionType" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Language" source="language" />
            <TextField label="Order Number" source="orderNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DictionaryEntry"
          target="creatorId"
          label="DictionaryEntries"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Approval Date" source="approvalDate" />
            <ReferenceField
              label="Approval User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Audio File Path" source="audioFilePath" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Challenge Word" source="isChallengeWord" />
            <ReferenceField
              label="Last Editor"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Origin Type" source="originType" />
            <TextField label="Part Of Speech" source="partOfSpeech" />
            <ReferenceField label="Root" source="root.id" reference="Root">
              <TextField source={ROOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Transliteration" source="transliteration" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Verb Form" source="verbForm" />
            <TextField label="Word" source="word" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Example"
          target="creatorId"
          label="Examples"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Context Notes" source="contextNotes" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Example Text" source="exampleText" />
            <TextField label="ID" source="id" />
            <TextField label="Translation" source="translation" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Root" target="creatorId" label="Roots">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Challenge"
              source="challengeroot.id"
              reference="ChallengeRoot"
            >
              <TextField source={CHALLENGEROOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Classical Origin" source="classicalOrigin" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Completed" source="isCompleted" />
            <TextField label="Notes" source="notes" />
            <TextField label="Root Letters" source="rootLetters" />
            <TextField label="Status" source="status" />
            <TextField label="Transliteration" source="transliteration" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DictionaryEntry"
          target="lastEditorId"
          label="DictionaryEntries"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Approval Date" source="approvalDate" />
            <ReferenceField
              label="Approval User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Audio File Path" source="audioFilePath" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Creator" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Challenge Word" source="isChallengeWord" />
            <ReferenceField
              label="Last Editor"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Origin Type" source="originType" />
            <TextField label="Part Of Speech" source="partOfSpeech" />
            <ReferenceField label="Root" source="root.id" reference="Root">
              <TextField source={ROOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Transliteration" source="transliteration" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Verb Form" source="verbForm" />
            <TextField label="Word" source="word" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AiSuggestion"
          target="reviewedBy"
          label="AiSuggestions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Examples" source="examples" />
            <TextField label="Form Type" source="formType" />
            <TextField label="ID" source="id" />
            <TextField label="Reviewed At" source="reviewedAt" />
            <ReferenceField label="Reviewer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Root" source="root.id" reference="Root">
              <TextField source={ROOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField
              label="Suggested Definition"
              source="suggestedDefinition"
            />
            <TextField label="Suggested Word" source="suggestedWord" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Submission"
          target="reviewedBy"
          label="Submissions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <TextField label="Reviewed At" source="reviewedAt" />
            <ReferenceField label="Reviewer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Submission Type" source="submissionType" />
            <DateField source="submittedAt" label="Submitted At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Submission"
          target="userId"
          label="Submissions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Entry"
              source="dictionaryentry.id"
              reference="DictionaryEntry"
            >
              <TextField source={DICTIONARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <TextField label="Reviewed At" source="reviewedAt" />
            <ReferenceField label="Reviewer" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Submission Type" source="submissionType" />
            <DateField source="submittedAt" label="Submitted At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Document"
          target="uploaderId"
          label="Documents"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Document Name" source="documentName" />
            <TextField label="Document Type" source="documentType" />
            <TextField label="File Path" source="filePath" />
            <TextField label="ID" source="id" />
            <TextField label="Language" source="language" />
            <TextField label="New Word Count" source="newWordCount" />
            <TextField label="Processing Status" source="processingStatus" />
            <DateField source="uploadedAt" label="Uploaded At" />
            <ReferenceField label="Uploader" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Word Count" source="wordCount" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserBadge"
          target="userId"
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
        <ReferenceManyField
          reference="UserRole"
          target="userId"
          label="UserRoles"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="assignedAt" label="Assigned At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Role" source="role.id" reference="Role">
              <TextField source={ROLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
