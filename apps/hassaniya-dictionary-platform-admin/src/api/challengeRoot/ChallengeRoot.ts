import { Root } from "../root/Root";

export type ChallengeRoot = {
  currentCount: number;
  description: string | null;
  endDate: Date | null;
  id: number;
  name: string;
  roots?: Array<Root>;
  startDate: Date | null;
  targetCount: number | null;
};
