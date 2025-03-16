import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type SettingWhereInput = {
  description?: StringNullableFilter;
  id?: IntFilter;
  settingGroup?: StringNullableFilter;
  settingName?: StringFilter;
  settingValue?: StringNullableFilter;
};
