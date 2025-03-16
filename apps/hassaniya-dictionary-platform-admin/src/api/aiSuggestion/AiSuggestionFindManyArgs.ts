import { AiSuggestionWhereInput } from "./AiSuggestionWhereInput";
import { AiSuggestionOrderByInput } from "./AiSuggestionOrderByInput";

export type AiSuggestionFindManyArgs = {
  where?: AiSuggestionWhereInput;
  orderBy?: Array<AiSuggestionOrderByInput>;
  skip?: number;
  take?: number;
};
