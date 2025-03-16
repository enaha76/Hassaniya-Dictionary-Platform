import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";

export type DefinitionCreateInput = {
  creator?: UserWhereUniqueInput | null;
  definitionText: string;
  definitionType?: string | null;
  entry: DictionaryEntryWhereUniqueInput;
  language: string;
  orderNumber: number;
};
