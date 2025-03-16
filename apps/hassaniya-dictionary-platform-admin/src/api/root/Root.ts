import { AiSuggestion } from "../aiSuggestion/AiSuggestion";
import { ChallengeRoot } from "../challengeRoot/ChallengeRoot";
import { User } from "../user/User";
import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";

export type Root = {
  aiSuggestions?: Array<AiSuggestion>;
  challenge?: ChallengeRoot | null;
  classicalOrigin: string | null;
  createdAt: Date;
  creator?: User | null;
  entries?: Array<DictionaryEntry>;
  id: number;
  isCompleted: boolean;
  notes: string | null;
  rootLetters: string;
  status: string;
  transliteration: string | null;
  updatedAt: Date;
};
