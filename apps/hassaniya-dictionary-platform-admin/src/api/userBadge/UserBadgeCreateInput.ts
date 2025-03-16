import { BadgeWhereUniqueInput } from "../badge/BadgeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserBadgeCreateInput = {
  badge: BadgeWhereUniqueInput;
  user: UserWhereUniqueInput;
};
