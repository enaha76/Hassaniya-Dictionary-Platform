import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  activityDate?: SortOrder;
  activityType?: SortOrder;
  description?: SortOrder;
  entryId?: SortOrder;
  id?: SortOrder;
  pointsEarned?: SortOrder;
  userId?: SortOrder;
};
