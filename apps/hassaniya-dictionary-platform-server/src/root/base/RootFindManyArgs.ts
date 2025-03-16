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
import { RootWhereInput } from "./RootWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RootOrderByInput } from "./RootOrderByInput";

@ArgsType()
class RootFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RootWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RootWhereInput, { nullable: true })
  @Type(() => RootWhereInput)
  where?: RootWhereInput;

  @ApiProperty({
    required: false,
    type: [RootOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RootOrderByInput], { nullable: true })
  @Type(() => RootOrderByInput)
  orderBy?: Array<RootOrderByInput>;

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

export { RootFindManyArgs as RootFindManyArgs };
