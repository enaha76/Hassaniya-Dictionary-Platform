import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";
import { User } from "../user/User";
import { Root } from "../root/Root";

export type AiSuggestion = {
  createdAt: Date;
  entry?: DictionaryEntry | null;
  examples: string | null;
  formType: string | null;
  id: number;
  reviewedAt: Date | null;
  reviewer?: User | null;
  root?: Root | null;
  status: string;
  suggestedDefinition: string | null;
  suggestedWord: string;
};
