import { UserBadgeCreateNestedManyWithoutBadgesInput } from "./UserBadgeCreateNestedManyWithoutBadgesInput";

export type BadgeCreateInput = {
  badgeName: string;
  description?: string | null;
  iconPath?: string | null;
  requiredPoints: number;
  requirementCount: number;
  requirementType?: string | null;
  userBadges?: UserBadgeCreateNestedManyWithoutBadgesInput;
};
