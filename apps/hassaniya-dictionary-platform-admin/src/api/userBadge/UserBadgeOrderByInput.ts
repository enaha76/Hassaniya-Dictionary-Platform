import { SortOrder } from "../../util/SortOrder";

export type UserBadgeOrderByInput = {
  badgeId?: SortOrder;
  earnedAt?: SortOrder;
  id?: SortOrder;
  userId?: SortOrder;
};
