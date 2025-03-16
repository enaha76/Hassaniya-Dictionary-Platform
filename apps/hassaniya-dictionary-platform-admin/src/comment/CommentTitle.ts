import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "commentText";

export const CommentTitle = (record: TComment): string => {
  return record.commentText?.toString() || String(record.id);
};
