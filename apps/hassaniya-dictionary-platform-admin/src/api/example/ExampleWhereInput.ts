import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type ExampleWhereInput = {
  contextNotes?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  creator?: UserWhereUniqueInput;
  entry?: DictionaryEntryWhereUniqueInput;
  exampleText?: StringFilter;
  id?: IntFilter;
  translation?: StringNullableFilter;
};
