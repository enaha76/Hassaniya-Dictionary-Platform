import { UserBadge } from "../userBadge/UserBadge";

export type Badge = {
  badgeName: string;
  description: string | null;
  iconPath: string | null;
  id: number;
  requiredPoints: number;
  requirementCount: number;
  requirementType: string | null;
  userBadges?: Array<UserBadge>;
};
