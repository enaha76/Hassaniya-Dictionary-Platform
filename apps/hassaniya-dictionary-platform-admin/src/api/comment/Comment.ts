import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";
import { User } from "../user/User";

export type Comment = {
  commentText: string;
  createdAt: Date;
  entry?: DictionaryEntry;
  id: number;
  parentComment?: Comment | null;
  replies?: Array<Comment>;
  user?: User;
};
