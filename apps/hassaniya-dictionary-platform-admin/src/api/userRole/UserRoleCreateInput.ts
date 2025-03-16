import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleCreateInput = {
  role: RoleWhereUniqueInput;
  user: UserWhereUniqueInput;
};
