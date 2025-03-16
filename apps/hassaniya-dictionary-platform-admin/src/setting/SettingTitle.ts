import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "settingName";

export const SettingTitle = (record: TSetting): string => {
  return record.settingName?.toString() || String(record.id);
};
