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
  IsInt,
  Max,
  ValidateNested,
} from "class-validator";
import { UserBadgeUpdateManyWithoutBadgesInput } from "./UserBadgeUpdateManyWithoutBadgesInput";
import { Type } from "class-transformer";

@InputType()
class BadgeUpdateInput {
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
  badgeName?: string;

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
  description?: string | null;

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
  iconPath?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  requiredPoints?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Max(99999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  requirementCount?: number;

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
  requirementType?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserBadgeUpdateManyWithoutBadgesInput,
  })
  @ValidateNested()
  @Type(() => UserBadgeUpdateManyWithoutBadgesInput)
  @IsOptional()
  @Field(() => UserBadgeUpdateManyWithoutBadgesInput, {
    nullable: true,
  })
  userBadges?: UserBadgeUpdateManyWithoutBadgesInput;
}

export { BadgeUpdateInput as BadgeUpdateInput };
