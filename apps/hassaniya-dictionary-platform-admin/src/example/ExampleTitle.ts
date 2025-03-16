import { Example as TExample } from "../api/example/Example";

export const EXAMPLE_TITLE_FIELD = "contextNotes";

export const ExampleTitle = (record: TExample): string => {
  return record.contextNotes?.toString() || String(record.id);
};
