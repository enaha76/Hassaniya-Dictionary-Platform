import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityWhereInput = {
  activityDate?: DateTimeFilter;
  activityType?: StringFilter;
  description?: StringNullableFilter;
  entry?: DictionaryEntryWhereUniqueInput;
  id?: IntFilter;
  pointsEarned?: IntFilter;
  user?: UserWhereUniqueInput;
};
