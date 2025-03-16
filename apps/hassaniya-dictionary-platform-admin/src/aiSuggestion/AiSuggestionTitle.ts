import { AiSuggestion as TAiSuggestion } from "../api/aiSuggestion/AiSuggestion";

export const AISUGGESTION_TITLE_FIELD = "examples";

export const AiSuggestionTitle = (record: TAiSuggestion): string => {
  return record.examples?.toString() || String(record.id);
};
