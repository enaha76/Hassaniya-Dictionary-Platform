import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityUpdateInput = {
  activityType?: string;
  description?: string | null;
  entry?: DictionaryEntryWhereUniqueInput | null;
  pointsEarned?: number;
  user?: UserWhereUniqueInput;
};
