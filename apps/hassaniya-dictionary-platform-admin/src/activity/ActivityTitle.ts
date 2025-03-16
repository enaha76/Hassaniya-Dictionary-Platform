import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "activityType";

export const ActivityTitle = (record: TActivity): string => {
  return record.activityType?.toString() || String(record.id);
};
