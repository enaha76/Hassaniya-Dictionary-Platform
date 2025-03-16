import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogCreateInput = {
  action: string;
  details?: string | null;
  entityId?: number | null;
  entityType: string;
  user?: UserWhereUniqueInput | null;
};
