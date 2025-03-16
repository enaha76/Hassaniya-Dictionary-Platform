import { RootUpdateManyWithoutChallengeRootsInput } from "./RootUpdateManyWithoutChallengeRootsInput";

export type ChallengeRootUpdateInput = {
  currentCount?: number;
  description?: string | null;
  endDate?: Date | null;
  name?: string;
  roots?: RootUpdateManyWithoutChallengeRootsInput;
  startDate?: Date | null;
  targetCount?: number | null;
};
