/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Root } from "./Root";
import { RootCountArgs } from "./RootCountArgs";
import { RootFindManyArgs } from "./RootFindManyArgs";
import { RootFindUniqueArgs } from "./RootFindUniqueArgs";
import { CreateRootArgs } from "./CreateRootArgs";
import { UpdateRootArgs } from "./UpdateRootArgs";
import { DeleteRootArgs } from "./DeleteRootArgs";
import { AiSuggestionFindManyArgs } from "../../aiSuggestion/base/AiSuggestionFindManyArgs";
import { AiSuggestion } from "../../aiSuggestion/base/AiSuggestion";
import { DictionaryEntryFindManyArgs } from "../../dictionaryEntry/base/DictionaryEntryFindManyArgs";
import { DictionaryEntry } from "../../dictionaryEntry/base/DictionaryEntry";
import { ChallengeRoot } from "../../challengeRoot/base/ChallengeRoot";
import { User } from "../../user/base/User";
import { RootService } from "../root.service";
@graphql.Resolver(() => Root)
export class RootResolverBase {
  constructor(protected readonly service: RootService) {}

  async _rootsMeta(
    @graphql.Args() args: RootCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Root])
  async roots(@graphql.Args() args: RootFindManyArgs): Promise<Root[]> {
    return this.service.roots(args);
  }

  @graphql.Query(() => Root, { nullable: true })
  async root(@graphql.Args() args: RootFindUniqueArgs): Promise<Root | null> {
    const result = await this.service.root(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Root)
  async createRoot(@graphql.Args() args: CreateRootArgs): Promise<Root> {
    return await this.service.createRoot({
      ...args,
      data: {
        ...args.data,

        challenge: args.data.challenge
          ? {
              connect: args.data.challenge,
            }
          : undefined,

        creator: args.data.creator
          ? {
              connect: args.data.creator,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Root)
  async updateRoot(@graphql.Args() args: UpdateRootArgs): Promise<Root | null> {
    try {
      return await this.service.updateRoot({
        ...args,
        data: {
          ...args.data,

          challenge: args.data.challenge
            ? {
                connect: args.data.challenge,
              }
            : undefined,

          creator: args.data.creator
            ? {
                connect: args.data.creator,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Root)
  async deleteRoot(@graphql.Args() args: DeleteRootArgs): Promise<Root | null> {
    try {
      return await this.service.deleteRoot(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [AiSuggestion], { name: "aiSuggestions" })
  async findAiSuggestions(
    @graphql.Parent() parent: Root,
    @graphql.Args() args: AiSuggestionFindManyArgs
  ): Promise<AiSuggestion[]> {
    const results = await this.service.findAiSuggestions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [DictionaryEntry], { name: "entries" })
  async findEntries(
    @graphql.Parent() parent: Root,
    @graphql.Args() args: DictionaryEntryFindManyArgs
  ): Promise<DictionaryEntry[]> {
    const results = await this.service.findEntries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => ChallengeRoot, {
    nullable: true,
    name: "challenge",
  })
  async getChallenge(
    @graphql.Parent() parent: Root
  ): Promise<ChallengeRoot | null> {
    const result = await this.service.getChallenge(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "creator",
  })
  async getCreator(@graphql.Parent() parent: Root): Promise<User | null> {
    const result = await this.service.getCreator(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
