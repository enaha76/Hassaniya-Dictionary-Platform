/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ExampleWhereUniqueInput } from "../../example/base/ExampleWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ExampleUpdateManyWithoutUsersInput {
  @Field(() => [ExampleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExampleWhereUniqueInput],
  })
  connect?: Array<ExampleWhereUniqueInput>;

  @Field(() => [ExampleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExampleWhereUniqueInput],
  })
  disconnect?: Array<ExampleWhereUniqueInput>;

  @Field(() => [ExampleWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ExampleWhereUniqueInput],
  })
  set?: Array<ExampleWhereUniqueInput>;
}

export { ExampleUpdateManyWithoutUsersInput as ExampleUpdateManyWithoutUsersInput };
