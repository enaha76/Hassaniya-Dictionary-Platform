import { User } from "../user/User";

export type AuditLog = {
  action: string;
  actionTime: Date;
  details: string | null;
  entityId: number | null;
  entityType: string;
  id: number;
  user?: User | null;
};
