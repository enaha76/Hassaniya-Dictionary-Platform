import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserRoleWhereInput = {
  assignedAt?: DateTimeFilter;
  id?: IntFilter;
  role?: RoleWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
