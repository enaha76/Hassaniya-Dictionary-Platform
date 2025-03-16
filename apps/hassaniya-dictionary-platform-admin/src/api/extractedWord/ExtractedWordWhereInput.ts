import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExtractedWordWhereInput = {
  context?: StringNullableFilter;
  document?: DocumentWhereUniqueInput;
  entry?: DictionaryEntryWhereUniqueInput;
  id?: IntFilter;
  isNew?: BooleanFilter;
  isProcessed?: BooleanFilter;
  word?: StringFilter;
};
