import { DictionaryEntry } from "../dictionaryEntry/DictionaryEntry";
import { User } from "../user/User";

export type Activity = {
  activityDate: Date;
  activityType: string;
  description: string | null;
  entry?: DictionaryEntry | null;
  id: number;
  pointsEarned: number;
  user?: User;
};
