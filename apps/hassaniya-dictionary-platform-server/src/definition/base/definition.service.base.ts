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
  Definition as PrismaDefinition,
  User as PrismaUser,
  DictionaryEntry as PrismaDictionaryEntry,
} from "@prisma/client";

export class DefinitionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DefinitionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.definition.count(args);
  }

  async definitions(
    args: Prisma.DefinitionFindManyArgs
  ): Promise<PrismaDefinition[]> {
    return this.prisma.definition.findMany(args);
  }
  async definition(
    args: Prisma.DefinitionFindUniqueArgs
  ): Promise<PrismaDefinition | null> {
    return this.prisma.definition.findUnique(args);
  }
  async createDefinition(
    args: Prisma.DefinitionCreateArgs
  ): Promise<PrismaDefinition> {
    return this.prisma.definition.create(args);
  }
  async updateDefinition(
    args: Prisma.DefinitionUpdateArgs
  ): Promise<PrismaDefinition> {
    return this.prisma.definition.update(args);
  }
  async deleteDefinition(
    args: Prisma.DefinitionDeleteArgs
  ): Promise<PrismaDefinition> {
    return this.prisma.definition.delete(args);
  }

  async getCreator(parentId: number): Promise<PrismaUser | null> {
    return this.prisma.definition
      .findUnique({
        where: { id: parentId },
      })
      .creator();
  }

  async getEntry(parentId: number): Promise<PrismaDictionaryEntry | null> {
    return this.prisma.definition
      .findUnique({
        where: { id: parentId },
      })
      .entry();
  }
}
