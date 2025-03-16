import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExtractedWordListRelationFilter } from "../extractedWord/ExtractedWordListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentWhereInput = {
  documentName?: StringFilter;
  documentType?: StringNullableFilter;
  extractedWords?: ExtractedWordListRelationFilter;
  filePath?: StringFilter;
  id?: IntFilter;
  language?: StringNullableFilter;
  newWordCount?: IntFilter;
  processingStatus?: StringFilter;
  uploadedAt?: DateTimeFilter;
  uploader?: UserWhereUniqueInput;
  wordCount?: IntFilter;
};
