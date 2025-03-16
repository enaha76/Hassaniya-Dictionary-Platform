import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RootListRelationFilter } from "../root/RootListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ChallengeRootWhereInput = {
  currentCount?: IntFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  roots?: RootListRelationFilter;
  startDate?: DateTimeNullableFilter;
  targetCount?: IntNullableFilter;
};
