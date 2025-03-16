import { AiSuggestionCreateNestedManyWithoutRootsInput } from "./AiSuggestionCreateNestedManyWithoutRootsInput";
import { ChallengeRootWhereUniqueInput } from "../challengeRoot/ChallengeRootWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DictionaryEntryCreateNestedManyWithoutRootsInput } from "./DictionaryEntryCreateNestedManyWithoutRootsInput";

export type RootCreateInput = {
  aiSuggestions?: AiSuggestionCreateNestedManyWithoutRootsInput;
  challenge?: ChallengeRootWhereUniqueInput | null;
  classicalOrigin?: string | null;
  creator?: UserWhereUniqueInput | null;
  entries?: DictionaryEntryCreateNestedManyWithoutRootsInput;
  isCompleted: boolean;
  notes?: string | null;
  rootLetters: string;
  status: string;
  transliteration?: string | null;
};
