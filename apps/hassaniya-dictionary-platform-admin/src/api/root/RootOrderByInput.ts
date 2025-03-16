import { SortOrder } from "../../util/SortOrder";

export type RootOrderByInput = {
  challengeId?: SortOrder;
  classicalOrigin?: SortOrder;
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  id?: SortOrder;
  isCompleted?: SortOrder;
  notes?: SortOrder;
  rootLetters?: SortOrder;
  status?: SortOrder;
  transliteration?: SortOrder;
  updatedAt?: SortOrder;
};
