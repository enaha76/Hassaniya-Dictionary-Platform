import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type SubmissionWhereInput = {
  entry?: DictionaryEntryWhereUniqueInput;
  feedback?: StringNullableFilter;
  id?: IntFilter;
  notes?: StringNullableFilter;
  reviewedAt?: DateTimeNullableFilter;
  reviewer?: UserWhereUniqueInput;
  status?: StringFilter;
  submissionType?: StringNullableFilter;
  submittedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
