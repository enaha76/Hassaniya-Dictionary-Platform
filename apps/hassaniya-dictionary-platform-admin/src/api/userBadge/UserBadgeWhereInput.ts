import { BadgeWhereUniqueInput } from "../badge/BadgeWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserBadgeWhereInput = {
  badge?: BadgeWhereUniqueInput;
  earnedAt?: DateTimeFilter;
  id?: IntFilter;
  user?: UserWhereUniqueInput;
};
