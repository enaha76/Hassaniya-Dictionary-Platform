/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Comment as PrismaComment,
  DictionaryEntry as PrismaDictionaryEntry,
  User as PrismaUser,
} from "@prisma/client";

export class CommentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CommentCountArgs, "select">): Promise<number> {
    return this.prisma.comment.count(args);
  }

  async comments(args: Prisma.CommentFindManyArgs): Promise<PrismaComment[]> {
    return this.prisma.comment.findMany(args);
  }
  async comment(
    args: Prisma.CommentFindUniqueArgs
  ): Promise<PrismaComment | null> {
    return this.prisma.comment.findUnique(args);
  }
  async createComment(args: Prisma.CommentCreateArgs): Promise<PrismaComment> {
    return this.prisma.comment.create(args);
  }
  async updateComment(args: Prisma.CommentUpdateArgs): Promise<PrismaComment> {
    return this.prisma.comment.update(args);
  }
  async deleteComment(args: Prisma.CommentDeleteArgs): Promise<PrismaComment> {
    return this.prisma.comment.delete(args);
  }

  async findReplies(
    parentId: number,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.comment
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .replies(args);
  }

  async getEntry(parentId: number): Promise<PrismaDictionaryEntry | null> {
    return this.prisma.comment
      .findUnique({
        where: { id: parentId },
      })
      .entry();
  }

  async getParentComment(parentId: number): Promise<PrismaComment | null> {
    return this.prisma.comment
      .findUnique({
        where: { id: parentId },
      })
      .parentComment();
  }

  async getUser(parentId: number): Promise<PrismaUser | null> {
    return this.prisma.comment
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
