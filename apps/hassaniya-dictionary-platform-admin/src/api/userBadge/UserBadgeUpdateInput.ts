import { BadgeWhereUniqueInput } from "../badge/BadgeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserBadgeUpdateInput = {
  badge?: BadgeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
