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
import { AiSuggestionWhereUniqueInput } from "./AiSuggestionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AiSuggestionUpdateInput } from "./AiSuggestionUpdateInput";

@ArgsType()
class UpdateAiSuggestionArgs {
  @ApiProperty({
    required: true,
    type: () => AiSuggestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AiSuggestionWhereUniqueInput)
  @Field(() => AiSuggestionWhereUniqueInput, { nullable: false })
  where!: AiSuggestionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AiSuggestionUpdateInput,
  })
  @ValidateNested()
  @Type(() => AiSuggestionUpdateInput)
  @Field(() => AiSuggestionUpdateInput, { nullable: false })
  data!: AiSuggestionUpdateInput;
}

export { UpdateAiSuggestionArgs as UpdateAiSuggestionArgs };
