import { Role } from "../role/Role";
import { User } from "../user/User";

export type UserRole = {
  assignedAt: Date;
  id: number;
  role?: Role;
  user?: User;
};
