import { SortOrder } from "../../util/SortOrder";

export type AuditLogOrderByInput = {
  action?: SortOrder;
  actionTime?: SortOrder;
  details?: SortOrder;
  entityId?: SortOrder;
  entityType?: SortOrder;
  id?: SortOrder;
  userId?: SortOrder;
};
