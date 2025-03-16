import { SortOrder } from "../../util/SortOrder";

export type AiSuggestionOrderByInput = {
  createdAt?: SortOrder;
  entryId?: SortOrder;
  examples?: SortOrder;
  formType?: SortOrder;
  id?: SortOrder;
  reviewedAt?: SortOrder;
  reviewedBy?: SortOrder;
  rootId?: SortOrder;
  status?: SortOrder;
  suggestedDefinition?: SortOrder;
  suggestedWord?: SortOrder;
};
