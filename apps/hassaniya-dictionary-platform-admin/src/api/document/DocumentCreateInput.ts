import { ExtractedWordCreateNestedManyWithoutDocumentsInput } from "./ExtractedWordCreateNestedManyWithoutDocumentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DocumentCreateInput = {
  documentName: string;
  documentType?: string | null;
  extractedWords?: ExtractedWordCreateNestedManyWithoutDocumentsInput;
  filePath: string;
  language?: string | null;
  newWordCount: number;
  processingStatus: string;
  uploader?: UserWhereUniqueInput | null;
  wordCount: number;
};
