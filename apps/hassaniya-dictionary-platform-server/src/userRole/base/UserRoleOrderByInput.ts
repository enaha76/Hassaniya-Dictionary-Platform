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
import { IsOptional, IsEnum } from "class-validator";
import { SortOrder } from "../../util/SortOrder";

@InputType({
  isAbstract: true,
  description: undefined,
})
class UserRoleOrderByInput {
  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  assignedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  roleId?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ["asc", "desc"],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  userId?: SortOrder;
}

export { UserRoleOrderByInput as UserRoleOrderByInput };
