import { ChallengeRoot as TChallengeRoot } from "../api/challengeRoot/ChallengeRoot";

export const CHALLENGEROOT_TITLE_FIELD = "name";

export const ChallengeRootTitle = (record: TChallengeRoot): string => {
  return record.name?.toString() || String(record.id);
};
