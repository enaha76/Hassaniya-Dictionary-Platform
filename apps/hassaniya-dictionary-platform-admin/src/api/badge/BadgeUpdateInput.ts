import { UserBadgeUpdateManyWithoutBadgesInput } from "./UserBadgeUpdateManyWithoutBadgesInput";

export type BadgeUpdateInput = {
  badgeName?: string;
  description?: string | null;
  iconPath?: string | null;
  requiredPoints?: number;
  requirementCount?: number;
  requirementType?: string | null;
  userBadges?: UserBadgeUpdateManyWithoutBadgesInput;
};
