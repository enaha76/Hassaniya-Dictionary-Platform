import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogUpdateInput = {
  action?: string;
  details?: string | null;
  entityId?: number | null;
  entityType?: string;
  user?: UserWhereUniqueInput | null;
};
