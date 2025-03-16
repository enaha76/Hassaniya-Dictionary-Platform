import { AiSuggestionUpdateManyWithoutRootsInput } from "./AiSuggestionUpdateManyWithoutRootsInput";
import { ChallengeRootWhereUniqueInput } from "../challengeRoot/ChallengeRootWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DictionaryEntryUpdateManyWithoutRootsInput } from "./DictionaryEntryUpdateManyWithoutRootsInput";

export type RootUpdateInput = {
  aiSuggestions?: AiSuggestionUpdateManyWithoutRootsInput;
  challenge?: ChallengeRootWhereUniqueInput | null;
  classicalOrigin?: string | null;
  creator?: UserWhereUniqueInput | null;
  entries?: DictionaryEntryUpdateManyWithoutRootsInput;
  isCompleted?: boolean;
  notes?: string | null;
  rootLetters?: string;
  status?: string;
  transliteration?: string | null;
};
