import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";

export type ExampleUpdateInput = {
  contextNotes?: string | null;
  creator?: UserWhereUniqueInput | null;
  entry?: DictionaryEntryWhereUniqueInput;
  exampleText?: string;
  translation?: string | null;
};
