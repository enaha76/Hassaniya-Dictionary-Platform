import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RootWhereUniqueInput } from "../root/RootWhereUniqueInput";

export type AiSuggestionUpdateInput = {
  entry?: DictionaryEntryWhereUniqueInput | null;
  examples?: string | null;
  formType?: string | null;
  reviewedAt?: Date | null;
  reviewer?: UserWhereUniqueInput | null;
  root?: RootWhereUniqueInput | null;
  status?: string;
  suggestedDefinition?: string | null;
  suggestedWord?: string;
};
