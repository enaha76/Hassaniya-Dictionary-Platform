import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DictionaryEntryWhereUniqueInput } from "../dictionaryEntry/DictionaryEntryWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { CommentListRelationFilter } from "./CommentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  commentText?: StringFilter;
  createdAt?: DateTimeFilter;
  entry?: DictionaryEntryWhereUniqueInput;
  id?: IntFilter;
  parentComment?: CommentWhereUniqueInput;
  replies?: CommentListRelationFilter;
  user?: UserWhereUniqueInput;
};
