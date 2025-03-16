import { ExtractedWordWhereInput } from "./ExtractedWordWhereInput";
import { ExtractedWordOrderByInput } from "./ExtractedWordOrderByInput";

export type ExtractedWordFindManyArgs = {
  where?: ExtractedWordWhereInput;
  orderBy?: Array<ExtractedWordOrderByInput>;
  skip?: number;
  take?: number;
};
