import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AuditLogWhereInput = {
  action?: StringFilter;
  actionTime?: DateTimeFilter;
  details?: StringNullableFilter;
  entityId?: IntNullableFilter;
  entityType?: StringFilter;
  id?: IntFilter;
  user?: UserWhereUniqueInput;
};
