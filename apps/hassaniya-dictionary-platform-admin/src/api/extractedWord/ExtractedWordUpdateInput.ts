import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";

export type ExtractedWordUpdateInput = {
  context?: string | null;
  document?: DocumentWhereUniqueInput;
  entry?: DictionaryEntryWhereUniqueInput | null;
  isNew?: boolean;
  isProcessed?: boolean;
  word?: string;
};
