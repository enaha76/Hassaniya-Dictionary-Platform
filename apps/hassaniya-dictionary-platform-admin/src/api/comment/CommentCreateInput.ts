import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentCreateNestedManyWithoutCommentsInput } from "./CommentCreateNestedManyWithoutCommentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  commentText: string;
  entry: DictionaryEntryWhereUniqueInput;
  parentComment?: CommentWhereUniqueInput | null;
  replies?: CommentCreateNestedManyWithoutCommentsInput;
  user: UserWhereUniqueInput;
};
