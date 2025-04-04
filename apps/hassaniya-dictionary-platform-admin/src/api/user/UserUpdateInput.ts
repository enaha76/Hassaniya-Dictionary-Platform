import { ActivityUpdateManyWithoutUsersInput } from "./ActivityUpdateManyWithoutUsersInput";
import { DictionaryEntryUpdateManyWithoutUsersInput } from "./DictionaryEntryUpdateManyWithoutUsersInput";
import { AuditLogUpdateManyWithoutUsersInput } from "./AuditLogUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { DefinitionUpdateManyWithoutUsersInput } from "./DefinitionUpdateManyWithoutUsersInput";
import { ExampleUpdateManyWithoutUsersInput } from "./ExampleUpdateManyWithoutUsersInput";
import { RootUpdateManyWithoutUsersInput } from "./RootUpdateManyWithoutUsersInput";
import { AiSuggestionUpdateManyWithoutUsersInput } from "./AiSuggestionUpdateManyWithoutUsersInput";
import { SubmissionUpdateManyWithoutUsersInput } from "./SubmissionUpdateManyWithoutUsersInput";
import { DocumentUpdateManyWithoutUsersInput } from "./DocumentUpdateManyWithoutUsersInput";
import { UserBadgeUpdateManyWithoutUsersInput } from "./UserBadgeUpdateManyWithoutUsersInput";
import { UserRoleUpdateManyWithoutUsersInput } from "./UserRoleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  activities?: ActivityUpdateManyWithoutUsersInput;
  approvedEntries?: DictionaryEntryUpdateManyWithoutUsersInput;
  auditLogs?: AuditLogUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
  createdDefinitions?: DefinitionUpdateManyWithoutUsersInput;
  createdEntries?: DictionaryEntryUpdateManyWithoutUsersInput;
  createdExamples?: ExampleUpdateManyWithoutUsersInput;
  createdRoots?: RootUpdateManyWithoutUsersInput;
  editedEntries?: DictionaryEntryUpdateManyWithoutUsersInput;
  email?: string;
  fullName?: string | null;
  isActive?: boolean;
  languageProficiency?: string | null;
  lastLogin?: Date | null;
  level?: number;
  passwordHash?: string;
  points?: number;
  profileImage?: string | null;
  reviewedSuggestions?: AiSuggestionUpdateManyWithoutUsersInput;
  reviews?: SubmissionUpdateManyWithoutUsersInput;
  submissions?: SubmissionUpdateManyWithoutUsersInput;
  uploadedDocuments?: DocumentUpdateManyWithoutUsersInput;
  userBadges?: UserBadgeUpdateManyWithoutUsersInput;
  userRoles?: UserRoleUpdateManyWithoutUsersInput;
  username?: string;
};
