import { User } from "../user/User";
import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";

export type Definition = {
  createdAt: Date;
  creator?: User | null;
  definitionText: string;
  definitionType: string | null;
  entry?: DictionaryEntry;
  id: number;
  language: string;
  orderNumber: number;
  updatedAt: Date;
};
