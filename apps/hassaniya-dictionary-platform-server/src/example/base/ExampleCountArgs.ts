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
import { ExampleWhereInput } from "./ExampleWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ExampleCountArgs {
  @ApiProperty({
    required: false,
    type: () => ExampleWhereInput,
  })
  @Field(() => ExampleWhereInput, { nullable: true })
  @Type(() => ExampleWhereInput)
  where?: ExampleWhereInput;
}

export { ExampleCountArgs as ExampleCountArgs };
