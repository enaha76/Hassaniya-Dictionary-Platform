import { Badge } from "../badge/Badge";
import { User } from "../user/User";

export type UserBadge = {
  badge?: Badge;
  earnedAt: Date;
  id: number;
  user?: User;
};
