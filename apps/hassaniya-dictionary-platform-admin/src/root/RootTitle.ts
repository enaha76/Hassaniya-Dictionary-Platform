import { Root as TRoot } from "../api/root/Root";

export const ROOT_TITLE_FIELD = "classicalOrigin";

export const RootTitle = (record: TRoot): string => {
  return record.classicalOrigin?.toString() || String(record.id);
};
