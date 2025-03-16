import { SortOrder } from "../../util/SortOrder";

export type UserRoleOrderByInput = {
  assignedAt?: SortOrder;
  id?: SortOrder;
  roleId?: SortOrder;
  userId?: SortOrder;
};
