import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";
import { User } from "../user/User";

export type Submission = {
  entry?: DictionaryEntry | null;
  feedback: string | null;
  id: number;
  notes: string | null;
  reviewedAt: Date | null;
  reviewer?: User | null;
  status: string;
  submissionType: string | null;
  submittedAt: Date;
  user?: User;
};
