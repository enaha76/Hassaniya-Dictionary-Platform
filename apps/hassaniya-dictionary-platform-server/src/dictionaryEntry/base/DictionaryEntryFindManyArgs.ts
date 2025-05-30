/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DictionaryEntryWhereInput } from "./DictionaryEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DictionaryEntryOrderByInput } from "./DictionaryEntryOrderByInput";

@ArgsType()
class DictionaryEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DictionaryEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DictionaryEntryWhereInput, { nullable: true })
  @Type(() => DictionaryEntryWhereInput)
  where?: DictionaryEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [DictionaryEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DictionaryEntryOrderByInput], { nullable: true })
  @Type(() => DictionaryEntryOrderByInput)
  orderBy?: Array<DictionaryEntryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DictionaryEntryFindManyArgs as DictionaryEntryFindManyArgs };
