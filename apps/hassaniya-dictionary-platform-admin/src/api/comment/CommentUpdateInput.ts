import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentUpdateManyWithoutCommentsInput } from "./CommentUpdateManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  commentText?: string;
  entry?: DictionaryEntryWhereUniqueInput;
  parentComment?: CommentWhereUniqueInput | null;
  replies?: CommentUpdateManyWithoutCommentsInput;
  user?: UserWhereUniqueInput;
};
