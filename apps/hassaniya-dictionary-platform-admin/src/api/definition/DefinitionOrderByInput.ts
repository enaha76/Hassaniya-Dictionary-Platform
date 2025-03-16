import { SortOrder } from "../../util/SortOrder";

export type DefinitionOrderByInput = {
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  definitionText?: SortOrder;
  definitionType?: SortOrder;
  entryId?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  orderNumber?: SortOrder;
  updatedAt?: SortOrder;
};
