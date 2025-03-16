import { UserRoleCreateNestedManyWithoutRolesInput } from "./UserRoleCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  name: string;
  permissionLevel: number;
  userRoles?: UserRoleCreateNestedManyWithoutRolesInput;
};
