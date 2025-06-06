/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiSuggestionCreateNestedManyWithoutRootsInput } from "./AiSuggestionCreateNestedManyWithoutRootsInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { ChallengeRootWhereUniqueInput } from "../../challengeRoot/base/ChallengeRootWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { DictionaryEntryCreateNestedManyWithoutRootsInput } from "./DictionaryEntryCreateNestedManyWithoutRootsInput";

@InputType()
class RootCreateInput {
  @ApiProperty({
    required: false,
    type: () => AiSuggestionCreateNestedManyWithoutRootsInput,
  })
  @ValidateNested()
  @Type(() => AiSuggestionCreateNestedManyWithoutRootsInput)
  @IsOptional()
  @Field(() => AiSuggestionCreateNestedManyWithoutRootsInput, {
    nullable: true,
  })
  aiSuggestions?: AiSuggestionCreateNestedManyWithoutRootsInput;

  @ApiProperty({
    required: false,
    type: () => ChallengeRootWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChallengeRootWhereUniqueInput)
  @IsOptional()
  @Field(() => ChallengeRootWhereUniqueInput, {
    nullable: true,
  })
  challenge?: ChallengeRootWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  classicalOrigin?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  creator?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => DictionaryEntryCreateNestedManyWithoutRootsInput,
  })
  @ValidateNested()
  @Type(() => DictionaryEntryCreateNestedManyWithoutRootsInput)
  @IsOptional()
  @Field(() => DictionaryEntryCreateNestedManyWithoutRootsInput, {
    nullable: true,
  })
  entries?: DictionaryEntryCreateNestedManyWithoutRootsInput;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isCompleted!: boolean;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  notes?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  rootLetters!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  status!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  transliteration?: string | null;
}

export { RootCreateInput as RootCreateInput };
