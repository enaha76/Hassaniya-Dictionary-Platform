import { AiSuggestionListRelationFilter } from "../aiSuggestion/AiSuggestionListRelationFilter";
import { ChallengeRootWhereUniqueInput } from "../challengeRoot/ChallengeRootWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DictionaryEntryListRelationFilter } from "../dictionaryEntry/DictionaryEntryListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";

export type RootWhereInput = {
  aiSuggestions?: AiSuggestionListRelationFilter;
  challenge?: ChallengeRootWhereUniqueInput;
  classicalOrigin?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  creator?: UserWhereUniqueInput;
  entries?: DictionaryEntryListRelationFilter;
  id?: IntFilter;
  isCompleted?: BooleanFilter;
  notes?: StringNullableFilter;
  rootLetters?: StringFilter;
  status?: StringFilter;
  transliteration?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};
