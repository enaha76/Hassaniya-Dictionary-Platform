import { DictionaryEntryWhereInput } from "./DictionaryEntryWhereInput";
import { DictionaryEntryOrderByInput } from "./DictionaryEntryOrderByInput";

export type DictionaryEntryFindManyArgs = {
  where?: DictionaryEntryWhereInput;
  orderBy?: Array<DictionaryEntryOrderByInput>;
  skip?: number;
  take?: number;
};
