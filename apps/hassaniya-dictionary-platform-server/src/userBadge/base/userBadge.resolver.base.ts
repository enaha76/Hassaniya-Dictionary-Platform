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
import { UserBadge } from "./UserBadge";
import { UserBadgeCountArgs } from "./UserBadgeCountArgs";
import { UserBadgeFindManyArgs } from "./UserBadgeFindManyArgs";
import { UserBadgeFindUniqueArgs } from "./UserBadgeFindUniqueArgs";
import { CreateUserBadgeArgs } from "./CreateUserBadgeArgs";
import { UpdateUserBadgeArgs } from "./UpdateUserBadgeArgs";
import { DeleteUserBadgeArgs } from "./DeleteUserBadgeArgs";
import { Badge } from "../../badge/base/Badge";
import { User } from "../../user/base/User";
import { UserBadgeService } from "../userBadge.service";
@graphql.Resolver(() => UserBadge)
export class UserBadgeResolverBase {
  constructor(protected readonly service: UserBadgeService) {}

  async _userBadgesMeta(
    @graphql.Args() args: UserBadgeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserBadge])
  async userBadges(
    @graphql.Args() args: UserBadgeFindManyArgs
  ): Promise<UserBadge[]> {
    return this.service.userBadges(args);
  }

  @graphql.Query(() => UserBadge, { nullable: true })
  async userBadge(
    @graphql.Args() args: UserBadgeFindUniqueArgs
  ): Promise<UserBadge | null> {
    const result = await this.service.userBadge(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserBadge)
  async createUserBadge(
    @graphql.Args() args: CreateUserBadgeArgs
  ): Promise<UserBadge> {
    return await this.service.createUserBadge({
      ...args,
      data: {
        ...args.data,

        badge: {
          connect: args.data.badge,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @graphql.Mutation(() => UserBadge)
  async updateUserBadge(
    @graphql.Args() args: UpdateUserBadgeArgs
  ): Promise<UserBadge | null> {
    try {
      return await this.service.updateUserBadge({
        ...args,
        data: {
          ...args.data,

          badge: {
            connect: args.data.badge,
          },

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

  @graphql.Mutation(() => UserBadge)
  async deleteUserBadge(
    @graphql.Args() args: DeleteUserBadgeArgs
  ): Promise<UserBadge | null> {
    try {
      return await this.service.deleteUserBadge(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Badge, {
    nullable: true,
    name: "badge",
  })
  async getBadge(@graphql.Parent() parent: UserBadge): Promise<Badge | null> {
    const result = await this.service.getBadge(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: UserBadge): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
