import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityCreateInput = {
  activityType: string;
  description?: string | null;
  entry?: DictionaryEntryWhereUniqueInput | null;
  pointsEarned: number;
  user: UserWhereUniqueInput;
};
