import { ExtractedWord } from "../extractedWord/ExtractedWord";
import { User } from "../user/User";

export type Document = {
  documentName: string;
  documentType: string | null;
  extractedWords?: Array<ExtractedWord>;
  filePath: string;
  id: number;
  language: string | null;
  newWordCount: number;
  processingStatus: string;
  uploadedAt: Date;
  uploader?: User | null;
  wordCount: number;
};
