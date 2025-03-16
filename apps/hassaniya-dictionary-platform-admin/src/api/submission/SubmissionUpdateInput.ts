import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubmissionUpdateInput = {
  entry?: DictionaryEntryWhereUniqueInput | null;
  feedback?: string | null;
  notes?: string | null;
  reviewedAt?: Date | null;
  reviewer?: UserWhereUniqueInput | null;
  status?: string;
  submissionType?: string | null;
  user?: UserWhereUniqueInput;
};
