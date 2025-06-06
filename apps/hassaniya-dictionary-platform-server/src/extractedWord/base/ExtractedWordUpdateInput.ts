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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { DocumentWhereUniqueInput } from "../../document/base/DocumentWhereUniqueInput";
import { Type } from "class-transformer";
import { DictionaryEntryWhereUniqueInput } from "../../dictionaryEntry/base/DictionaryEntryWhereUniqueInput";

@InputType()
class ExtractedWordUpdateInput {
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
  context?: string | null;

  @ApiProperty({
    required: false,
    type: () => DocumentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentWhereUniqueInput)
  @IsOptional()
  @Field(() => DocumentWhereUniqueInput, {
    nullable: true,
  })
  document?: DocumentWhereUniqueInput;

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
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isNew?: boolean;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isProcessed?: boolean;

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
  word?: string;
}

export { ExtractedWordUpdateInput as ExtractedWordUpdateInput };
