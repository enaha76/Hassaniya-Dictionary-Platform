import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserRoleListRelationFilter } from "../userRole/UserRoleListRelationFilter";

export type RoleWhereInput = {
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  permissionLevel?: IntFilter;
  userRoles?: UserRoleListRelationFilter;
};
