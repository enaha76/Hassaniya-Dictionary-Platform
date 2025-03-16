import { SortOrder } from "../../util/SortOrder";

export type ExtractedWordOrderByInput = {
  context?: SortOrder;
  documentId?: SortOrder;
  entryId?: SortOrder;
  id?: SortOrder;
  isNew?: SortOrder;
  isProcessed?: SortOrder;
  word?: SortOrder;
};
