import { SortOrder } from "../../util/SortOrder";

export type SubmissionOrderByInput = {
  entryId?: SortOrder;
  feedback?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  reviewedAt?: SortOrder;
  reviewedBy?: SortOrder;
  status?: SortOrder;
  submissionType?: SortOrder;
  submittedAt?: SortOrder;
  userId?: SortOrder;
};
