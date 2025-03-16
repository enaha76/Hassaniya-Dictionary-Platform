import { UserRole } from "../userRole/UserRole";

export type Role = {
  description: string | null;
  id: number;
  name: string;
  permissionLevel: number;
  userRoles?: Array<UserRole>;
};
