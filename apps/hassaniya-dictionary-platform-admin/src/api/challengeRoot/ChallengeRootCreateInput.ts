import { RootCreateNestedManyWithoutChallengeRootsInput } from "./RootCreateNestedManyWithoutChallengeRootsInput";

export type ChallengeRootCreateInput = {
  currentCount: number;
  description?: string | null;
  endDate?: Date | null;
  name: string;
  roots?: RootCreateNestedManyWithoutChallengeRootsInput;
  startDate?: Date | null;
  targetCount?: number | null;
};
