import { Document } from "../document/Document";
import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";

export type ExtractedWord = {
  context: string | null;
  document?: Document;
  entry?: DictionaryEntry | null;
  id: number;
  isNew: boolean;
  isProcessed: boolean;
  word: string;
};
