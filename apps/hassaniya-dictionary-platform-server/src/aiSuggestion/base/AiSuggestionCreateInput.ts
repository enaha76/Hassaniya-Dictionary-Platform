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
import { DictionaryEntryWhereUniqueInput } from "../../dictionaryEntry/base/DictionaryEntryWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { RootWhereUniqueInput } from "../../root/base/RootWhereUniqueInput";

@InputType()
class AiSuggestionCreateInput {
  @ApiProperty({
    required: false,
    type: () => DictionaryEntryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DictionaryEntryWhereUniqueInput)
  @IsOptional()
  @Field(() => DictionaryEntryWhereUniqueInput, {
    nullable: true,
  })
  entry?: DictionaryEntryWhereUniqueInput | null;

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
  examples?: string | null;

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
  formType?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reviewedAt?: Date | null;

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
  reviewer?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => RootWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RootWhereUniqueInput)
  @IsOptional()
  @Field(() => RootWhereUniqueInput, {
    nullable: true,
  })
  root?: RootWhereUniqueInput | null;

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
  suggestedDefinition?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  suggestedWord!: string;
}

export { AiSuggestionCreateInput as AiSuggestionCreateInput };
