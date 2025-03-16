import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type DefinitionWhereInput = {
  createdAt?: DateTimeFilter;
  creator?: UserWhereUniqueInput;
  definitionText?: StringFilter;
  definitionType?: StringNullableFilter;
  entry?: DictionaryEntryWhereUniqueInput;
  id?: IntFilter;
  language?: StringFilter;
  orderNumber?: IntFilter;
  updatedAt?: DateTimeFilter;
};
