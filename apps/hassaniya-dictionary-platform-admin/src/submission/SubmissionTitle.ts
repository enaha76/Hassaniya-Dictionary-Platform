import { Submission as TSubmission } from "../api/submission/Submission";

export const SUBMISSION_TITLE_FIELD = "feedback";

export const SubmissionTitle = (record: TSubmission): string => {
  return record.feedback?.toString() || String(record.id);
};
