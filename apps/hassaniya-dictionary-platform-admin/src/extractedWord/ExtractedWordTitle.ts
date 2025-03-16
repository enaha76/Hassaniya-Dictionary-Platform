import { ExtractedWord as TExtractedWord } from "../api/extractedWord/ExtractedWord";

export const EXTRACTEDWORD_TITLE_FIELD = "context";

export const ExtractedWordTitle = (record: TExtractedWord): string => {
  return record.context?.toString() || String(record.id);
};
