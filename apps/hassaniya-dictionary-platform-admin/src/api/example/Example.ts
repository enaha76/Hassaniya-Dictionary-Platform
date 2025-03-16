import { User } from "../user/User";
import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";

export type Example = {
  contextNotes: string | null;
  createdAt: Date;
  creator?: User | null;
  entry?: DictionaryEntry;
  exampleText: string;
  id: number;
  translation: string | null;
};
