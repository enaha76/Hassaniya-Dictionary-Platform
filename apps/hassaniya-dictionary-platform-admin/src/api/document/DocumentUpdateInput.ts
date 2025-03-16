import { ExtractedWordUpdateManyWithoutDocumentsInput } from "./ExtractedWordUpdateManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentUpdateInput = {
  documentName?: string;
  documentType?: string | null;
  extractedWords?: ExtractedWordUpdateManyWithoutDocumentsInput;
  filePath?: string;
  language?: string | null;
  newWordCount?: number;
  processingStatus?: string;
  uploader?: UserWhereUniqueInput | null;
  wordCount?: number;
};
