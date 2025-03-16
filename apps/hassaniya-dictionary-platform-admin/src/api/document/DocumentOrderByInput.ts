import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  documentName?: SortOrder;
  documentType?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  newWordCount?: SortOrder;
  processingStatus?: SortOrder;
  uploadedAt?: SortOrder;
  uploaderId?: SortOrder;
  wordCount?: SortOrder;
};
