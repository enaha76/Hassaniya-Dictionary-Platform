import { SortOrder } from "../../util/SortOrder";

export type BadgeOrderByInput = {
  badgeName?: SortOrder;
  description?: SortOrder;
  iconPath?: SortOrder;
  id?: SortOrder;
  requiredPoints?: SortOrder;
  requirementCount?: SortOrder;
  requirementType?: SortOrder;
};
