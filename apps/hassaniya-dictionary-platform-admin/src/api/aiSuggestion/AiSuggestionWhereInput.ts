import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RootWhereUniqueInput } from "../root/RootWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AiSuggestionWhereInput = {
  createdAt?: DateTimeFilter;
  entry?: DictionaryEntryWhereUniqueInput;
  examples?: StringNullableFilter;
  formType?: StringNullableFilter;
  id?: IntFilter;
  reviewedAt?: DateTimeNullableFilter;
  reviewer?: UserWhereUniqueInput;
  root?: RootWhereUniqueInput;
  status?: StringFilter;
  suggestedDefinition?: StringNullableFilter;
  suggestedWord?: StringFilter;
};
