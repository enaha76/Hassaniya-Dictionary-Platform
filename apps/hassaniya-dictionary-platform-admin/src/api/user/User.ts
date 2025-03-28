import { Activity } from "../activity/Activity";
import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";
import { AuditLog } from "../auditLog/AuditLog";
import { Comment } from "../comment/Comment";
import { Definition } from "../definition/Definition";
import { Example } from "../example/Example";
import { Root } from "../root/Root";
import { AiSuggestion } from "../aiSuggestion/AiSuggestion";
import { Submission } from "../submission/Submission";
import { Document } from "../document/Document";
import { UserBadge } from "../userBadge/UserBadge";
import { UserRole } from "../userRole/UserRole";

export type User = {
  activities?: Array<Activity>;
  approvedEntries?: Array<DictionaryEntry>;
  auditLogs?: Array<AuditLog>;
  comments?: Array<Comment>;
  createdAt: Date;
  createdDefinitions?: Array<Definition>;
  createdEntries?: Array<DictionaryEntry>;
  createdExamples?: Array<Example>;
  createdRoots?: Array<Root>;
  editedEntries?: Array<DictionaryEntry>;
  email: string;
  fullName: string | null;
  id: number;
  isActive: boolean;
  languageProficiency: string | null;
  lastLogin: Date | null;
  level: number;
  passwordHash: string;
  points: number;
  profileImage: string | null;
  reviewedSuggestions?: Array<AiSuggestion>;
  reviews?: Array<Submission>;
  submissions?: Array<Submission>;
  uploadedDocuments?: Array<Document>;
  userBadges?: Array<UserBadge>;
  userRoles?: Array<UserRole>;
  username: string;
};
