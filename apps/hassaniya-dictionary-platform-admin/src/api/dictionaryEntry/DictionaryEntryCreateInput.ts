import { ActivityCreateNestedManyWithoutDictionaryEntriesInput } from "./ActivityCreateNestedManyWithoutDictionaryEntriesInput";
import { AiSuggestionCreateNestedManyWithoutDictionaryEntriesInput } from "./AiSuggestionCreateNestedManyWithoutDictionaryEntriesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CommentCreateNestedManyWithoutDictionaryEntriesInput } from "./CommentCreateNestedManyWithoutDictionaryEntriesInput";
import { DefinitionCreateNestedManyWithoutDictionaryEntriesInput } from "./DefinitionCreateNestedManyWithoutDictionaryEntriesInput";
import { ExampleCreateNestedManyWithoutDictionaryEntriesInput } from "./ExampleCreateNestedManyWithoutDictionaryEntriesInput";
import { ExtractedWordCreateNestedManyWithoutDictionaryEntriesInput } from "./ExtractedWordCreateNestedManyWithoutDictionaryEntriesInput";
import { RootWhereUniqueInput } from "../root/RootWhereUniqueInput";
import { SubmissionCreateNestedManyWithoutDictionaryEntriesInput } from "./SubmissionCreateNestedManyWithoutDictionaryEntriesInput";

export type DictionaryEntryCreateInput = {
  activities?: ActivityCreateNestedManyWithoutDictionaryEntriesInput;
  aiSuggestions?: AiSuggestionCreateNestedManyWithoutDictionaryEntriesInput;
  approvalDate?: Date | null;
  approvalUser?: UserWhereUniqueInput | null;
  audioFilePath?: string | null;
  comments?: CommentCreateNestedManyWithoutDictionaryEntriesInput;
  creator?: UserWhereUniqueInput | null;
  definitions?: DefinitionCreateNestedManyWithoutDictionaryEntriesInput;
  examples?: ExampleCreateNestedManyWithoutDictionaryEntriesInput;
  extractedWords?: ExtractedWordCreateNestedManyWithoutDictionaryEntriesInput;
  isChallengeWord: boolean;
  lastEditor?: UserWhereUniqueInput | null;
  originType?: string | null;
  partOfSpeech?: string | null;
  root?: RootWhereUniqueInput | null;
  status: string;
  submissions?: SubmissionCreateNestedManyWithoutDictionaryEntriesInput;
  transliteration?: string | null;
  verbForm?: string | null;
  word: string;
};
