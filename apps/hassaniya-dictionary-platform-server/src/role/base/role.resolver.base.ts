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
import { Role } from "./Role";
import { RoleCountArgs } from "./RoleCountArgs";
import { RoleFindManyArgs } from "./RoleFindManyArgs";
import { RoleFindUniqueArgs } from "./RoleFindUniqueArgs";
import { CreateRoleArgs } from "./CreateRoleArgs";
import { UpdateRoleArgs } from "./UpdateRoleArgs";
import { DeleteRoleArgs } from "./DeleteRoleArgs";
import { UserRoleFindManyArgs } from "../../userRole/base/UserRoleFindManyArgs";
import { UserRole } from "../../userRole/base/UserRole";
import { RoleService } from "../role.service";
@graphql.Resolver(() => Role)
export class RoleResolverBase {
  constructor(protected readonly service: RoleService) {}

  async _rolesMeta(
    @graphql.Args() args: RoleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Role])
  async roles(@graphql.Args() args: RoleFindManyArgs): Promise<Role[]> {
    return this.service.roles(args);
  }

  @graphql.Query(() => Role, { nullable: true })
  async role(@graphql.Args() args: RoleFindUniqueArgs): Promise<Role | null> {
    const result = await this.service.role(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Role)
  async createRole(@graphql.Args() args: CreateRoleArgs): Promise<Role> {
    return await this.service.createRole({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Role)
  async updateRole(@graphql.Args() args: UpdateRoleArgs): Promise<Role | null> {
    try {
      return await this.service.updateRole({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Role)
  async deleteRole(@graphql.Args() args: DeleteRoleArgs): Promise<Role | null> {
    try {
      return await this.service.deleteRole(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [UserRole], { name: "userRoles" })
  async findUserRoles(
    @graphql.Parent() parent: Role,
    @graphql.Args() args: UserRoleFindManyArgs
  ): Promise<UserRole[]> {
    const results = await this.service.findUserRoles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
