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
import { ExtractedWordWhereInput } from "./ExtractedWordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExtractedWordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExtractedWordWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractedWordWhereInput)
  @IsOptional()
  @Field(() => ExtractedWordWhereInput, {
    nullable: true,
  })
  every?: ExtractedWordWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExtractedWordWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractedWordWhereInput)
  @IsOptional()
  @Field(() => ExtractedWordWhereInput, {
    nullable: true,
  })
  some?: ExtractedWordWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExtractedWordWhereInput,
  })
  @ValidateNested()
  @Type(() => ExtractedWordWhereInput)
  @IsOptional()
  @Field(() => ExtractedWordWhereInput, {
    nullable: true,
  })
  none?: ExtractedWordWhereInput;
}
export { ExtractedWordListRelationFilter as ExtractedWordListRelationFilter };
