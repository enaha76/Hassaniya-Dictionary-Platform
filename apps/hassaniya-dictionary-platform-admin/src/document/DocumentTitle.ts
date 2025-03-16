import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "documentName";

export const DocumentTitle = (record: TDocument): string => {
  return record.documentName?.toString() || String(record.id);
};
