import { Definition as TDefinition } from "../api/definition/Definition";

export const DEFINITION_TITLE_FIELD = "definitionText";

export const DefinitionTitle = (record: TDefinition): string => {
  return record.definitionText?.toString() || String(record.id);
};
