import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  commentText?: SortOrder;
  createdAt?: SortOrder;
  entryId?: SortOrder;
  id?: SortOrder;
  parentCommentId?: SortOrder;
  userId?: SortOrder;
};
