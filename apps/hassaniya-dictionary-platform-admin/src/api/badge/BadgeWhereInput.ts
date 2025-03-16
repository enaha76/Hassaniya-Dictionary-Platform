import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserBadgeListRelationFilter } from "../userBadge/UserBadgeListRelationFilter";

export type BadgeWhereInput = {
  badgeName?: StringFilter;
  description?: StringNullableFilter;
  iconPath?: StringNullableFilter;
  id?: IntFilter;
  requiredPoints?: IntFilter;
  requirementCount?: IntFilter;
  requirementType?: StringNullableFilter;
  userBadges?: UserBadgeListRelationFilter;
};
