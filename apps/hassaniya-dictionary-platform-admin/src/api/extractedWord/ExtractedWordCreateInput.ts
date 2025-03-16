import { DocumentWhereUniqueInput } from "../document/DocumentWhereUniqueInput";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";

export type ExtractedWordCreateInput = {
  context?: string | null;
  document: DocumentWhereUniqueInput;
  entry?: DictionaryEntryWhereUniqueInput | null;
  isNew: boolean;
  isProcessed: boolean;
  word: string;
};
