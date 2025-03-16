import { Badge as TBadge } from "../api/badge/Badge";

export const BADGE_TITLE_FIELD = "badgeName";

export const BadgeTitle = (record: TBadge): string => {
  return record.badgeName?.toString() || String(record.id);
};
