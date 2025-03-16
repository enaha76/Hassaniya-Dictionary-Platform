import { UserBadge as TUserBadge } from "../api/userBadge/UserBadge";

export const USERBADGE_TITLE_FIELD = "id";

export const UserBadgeTitle = (record: TUserBadge): string => {
  return record.id?.toString() || String(record.id);
};
