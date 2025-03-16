import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleUpdateInput = {
  role?: RoleWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
