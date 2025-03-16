import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  description?: SortOrder;
  id?: SortOrder;
  settingGroup?: SortOrder;
  settingName?: SortOrder;
  settingValue?: SortOrder;
};
