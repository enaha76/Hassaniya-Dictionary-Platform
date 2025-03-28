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
import { User } from "./User";
import { UserCountArgs } from "./UserCountArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { ActivityFindManyArgs } from "../../activity/base/ActivityFindManyArgs";
import { Activity } from "../../activity/base/Activity";
import { DictionaryEntryFindManyArgs } from "../../dictionaryEntry/base/DictionaryEntryFindManyArgs";
import { DictionaryEntry } from "../../dictionaryEntry/base/DictionaryEntry";
import { AuditLogFindManyArgs } from "../../auditLog/base/AuditLogFindManyArgs";
import { AuditLog } from "../../auditLog/base/AuditLog";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { DefinitionFindManyArgs } from "../../definition/base/DefinitionFindManyArgs";
import { Definition } from "../../definition/base/Definition";
import { ExampleFindManyArgs } from "../../example/base/ExampleFindManyArgs";
import { Example } from "../../example/base/Example";
import { RootFindManyArgs } from "../../root/base/RootFindManyArgs";
import { Root } from "../../root/base/Root";
import { AiSuggestionFindManyArgs } from "../../aiSuggestion/base/AiSuggestionFindManyArgs";
import { AiSuggestion } from "../../aiSuggestion/base/AiSuggestion";
import { SubmissionFindManyArgs } from "../../submission/base/SubmissionFindManyArgs";
import { Submission } from "../../submission/base/Submission";
import { DocumentFindManyArgs } from "../../document/base/DocumentFindManyArgs";
import { Document } from "../../document/base/Document";
import { UserBadgeFindManyArgs } from "../../userBadge/base/UserBadgeFindManyArgs";
import { UserBadge } from "../../userBadge/base/UserBadge";
import { UserRoleFindManyArgs } from "../../userRole/base/UserRoleFindManyArgs";
import { UserRole } from "../../userRole/base/UserRole";
import { UserService } from "../user.service";
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(protected readonly service: UserService) {}

  async _usersMeta(
    @graphql.Args() args: UserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [User])
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.users(args);
  }

  @graphql.Query(() => User, { nullable: true })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.user(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => User)
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.createUser({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => User)
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.updateUser({
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

  @graphql.Mutation(() => User)
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
    try {
      return await this.service.deleteUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Activity], { name: "activities" })
  async findActivities(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ActivityFindManyArgs
  ): Promise<Activity[]> {
    const results = await this.service.findActivities(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [DictionaryEntry], { name: "approvedEntries" })
  async findApprovedEntries(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DictionaryEntryFindManyArgs
  ): Promise<DictionaryEntry[]> {
    const results = await this.service.findApprovedEntries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [AuditLog], { name: "auditLogs" })
  async findAuditLogs(
    @graphql.Parent() parent: User,
    @graphql.Args() args: AuditLogFindManyArgs
  ): Promise<AuditLog[]> {
    const results = await this.service.findAuditLogs(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Comment], { name: "comments" })
  async findComments(
    @graphql.Parent() parent: User,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Definition], { name: "createdDefinitions" })
  async findCreatedDefinitions(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DefinitionFindManyArgs
  ): Promise<Definition[]> {
    const results = await this.service.findCreatedDefinitions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [DictionaryEntry], { name: "createdEntries" })
  async findCreatedEntries(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DictionaryEntryFindManyArgs
  ): Promise<DictionaryEntry[]> {
    const results = await this.service.findCreatedEntries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Example], { name: "createdExamples" })
  async findCreatedExamples(
    @graphql.Parent() parent: User,
    @graphql.Args() args: ExampleFindManyArgs
  ): Promise<Example[]> {
    const results = await this.service.findCreatedExamples(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Root], { name: "createdRoots" })
  async findCreatedRoots(
    @graphql.Parent() parent: User,
    @graphql.Args() args: RootFindManyArgs
  ): Promise<Root[]> {
    const results = await this.service.findCreatedRoots(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [DictionaryEntry], { name: "editedEntries" })
  async findEditedEntries(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DictionaryEntryFindManyArgs
  ): Promise<DictionaryEntry[]> {
    const results = await this.service.findEditedEntries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [AiSuggestion], { name: "reviewedSuggestions" })
  async findReviewedSuggestions(
    @graphql.Parent() parent: User,
    @graphql.Args() args: AiSuggestionFindManyArgs
  ): Promise<AiSuggestion[]> {
    const results = await this.service.findReviewedSuggestions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Submission], { name: "reviews" })
  async findReviews(
    @graphql.Parent() parent: User,
    @graphql.Args() args: SubmissionFindManyArgs
  ): Promise<Submission[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Submission], { name: "submissions" })
  async findSubmissions(
    @graphql.Parent() parent: User,
    @graphql.Args() args: SubmissionFindManyArgs
  ): Promise<Submission[]> {
    const results = await this.service.findSubmissions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Document], { name: "uploadedDocuments" })
  async findUploadedDocuments(
    @graphql.Parent() parent: User,
    @graphql.Args() args: DocumentFindManyArgs
  ): Promise<Document[]> {
    const results = await this.service.findUploadedDocuments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [UserBadge], { name: "userBadges" })
  async findUserBadges(
    @graphql.Parent() parent: User,
    @graphql.Args() args: UserBadgeFindManyArgs
  ): Promise<UserBadge[]> {
    const results = await this.service.findUserBadges(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [UserRole], { name: "userRoles" })
  async findUserRoles(
    @graphql.Parent() parent: User,
    @graphql.Args() args: UserRoleFindManyArgs
  ): Promise<UserRole[]> {
    const results = await this.service.findUserRoles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
