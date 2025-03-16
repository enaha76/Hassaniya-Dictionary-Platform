import { DictionaryEntry as TDictionaryEntry } from "../api/dictionaryEntry/DictionaryEntry";

export const DICTIONARYENTRY_TITLE_FIELD = "audioFilePath";

export const DictionaryEntryTitle = (record: TDictionaryEntry): string => {
  return record.audioFilePath?.toString() || String(record.id);
};
