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
import { Activity } from "./Activity";
import { ActivityCountArgs } from "./ActivityCountArgs";
import { ActivityFindManyArgs } from "./ActivityFindManyArgs";
import { ActivityFindUniqueArgs } from "./ActivityFindUniqueArgs";
import { CreateActivityArgs } from "./CreateActivityArgs";
import { UpdateActivityArgs } from "./UpdateActivityArgs";
import { DeleteActivityArgs } from "./DeleteActivityArgs";
import { DictionaryEntry } from "../../dictionaryEntry/base/DictionaryEntry";
import { User } from "../../user/base/User";
import { ActivityService } from "../activity.service";
@graphql.Resolver(() => Activity)
export class ActivityResolverBase {
  constructor(protected readonly service: ActivityService) {}

  async _activitiesMeta(
    @graphql.Args() args: ActivityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Activity])
  async activities(
    @graphql.Args() args: ActivityFindManyArgs
  ): Promise<Activity[]> {
    return this.service.activities(args);
  }

  @graphql.Query(() => Activity, { nullable: true })
  async activity(
    @graphql.Args() args: ActivityFindUniqueArgs
  ): Promise<Activity | null> {
    const result = await this.service.activity(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Activity)
  async createActivity(
    @graphql.Args() args: CreateActivityArgs
  ): Promise<Activity> {
    return await this.service.createActivity({
      ...args,
      data: {
        ...args.data,

        entry: args.data.entry
          ? {
              connect: args.data.entry,
            }
          : undefined,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => Activity)
  async updateActivity(
    @graphql.Args() args: UpdateActivityArgs
  ): Promise<Activity | null> {
    try {
      return await this.service.updateActivity({
        ...args,
        data: {
          ...args.data,

          entry: args.data.entry
            ? {
                connect: args.data.entry,
              }
            : undefined,

          user: {
            connect: args.data.user,
          },
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

  @graphql.Mutation(() => Activity)
  async deleteActivity(
    @graphql.Args() args: DeleteActivityArgs
  ): Promise<Activity | null> {
    try {
      return await this.service.deleteActivity(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => DictionaryEntry, {
    nullable: true,
    name: "entry",
  })
  async getEntry(
    @graphql.Parent() parent: Activity
  ): Promise<DictionaryEntry | null> {
    const result = await this.service.getEntry(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Activity): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
