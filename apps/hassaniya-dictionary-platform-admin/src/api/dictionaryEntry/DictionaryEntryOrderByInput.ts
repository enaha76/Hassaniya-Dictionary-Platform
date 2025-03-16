import { SortOrder } from "../../util/SortOrder";

export type DictionaryEntryOrderByInput = {
  approvalDate?: SortOrder;
  approvalUserId?: SortOrder;
  audioFilePath?: SortOrder;
  createdAt?: SortOrder;
  creatorId?: SortOrder;
  id?: SortOrder;
  isChallengeWord?: SortOrder;
  lastEditorId?: SortOrder;
  originType?: SortOrder;
  partOfSpeech?: SortOrder;
  rootId?: SortOrder;
  status?: SortOrder;
  transliteration?: SortOrder;
  updatedAt?: SortOrder;
  verbForm?: SortOrder;
  word?: SortOrder;
};
