/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RootService } from "../root.service";
import { RootCreateInput } from "./RootCreateInput";
import { Root } from "./Root";
import { RootFindManyArgs } from "./RootFindManyArgs";
import { RootWhereUniqueInput } from "./RootWhereUniqueInput";
import { RootUpdateInput } from "./RootUpdateInput";
import { AiSuggestionFindManyArgs } from "../../aiSuggestion/base/AiSuggestionFindManyArgs";
import { AiSuggestion } from "../../aiSuggestion/base/AiSuggestion";
import { AiSuggestionWhereUniqueInput } from "../../aiSuggestion/base/AiSuggestionWhereUniqueInput";
import { DictionaryEntryFindManyArgs } from "../../dictionaryEntry/base/DictionaryEntryFindManyArgs";
import { DictionaryEntry } from "../../dictionaryEntry/base/DictionaryEntry";
import { DictionaryEntryWhereUniqueInput } from "../../dictionaryEntry/base/DictionaryEntryWhereUniqueInput";

export class RootControllerBase {
  constructor(protected readonly service: RootService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Root })
  async createRoot(@common.Body() data: RootCreateInput): Promise<Root> {
    return await this.service.createRoot({
      data: {
        ...data,

        challenge: data.challenge
          ? {
              connect: data.challenge,
            }
          : undefined,

        creator: data.creator
          ? {
              connect: data.creator,
            }
          : undefined,
      },
      select: {
        challenge: {
          select: {
            id: true,
          },
        },

        classicalOrigin: true,
        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        id: true,
        isCompleted: true,
        notes: true,
        rootLetters: true,
        status: true,
        transliteration: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Root] })
  @ApiNestedQuery(RootFindManyArgs)
  async roots(@common.Req() request: Request): Promise<Root[]> {
    const args = plainToClass(RootFindManyArgs, request.query);
    return this.service.roots({
      ...args,
      select: {
        challenge: {
          select: {
            id: true,
          },
        },

        classicalOrigin: true,
        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        id: true,
        isCompleted: true,
        notes: true,
        rootLetters: true,
        status: true,
        transliteration: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Root })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async root(
    @common.Param() params: RootWhereUniqueInput
  ): Promise<Root | null> {
    const result = await this.service.root({
      where: params,
      select: {
        challenge: {
          select: {
            id: true,
          },
        },

        classicalOrigin: true,
        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        id: true,
        isCompleted: true,
        notes: true,
        rootLetters: true,
        status: true,
        transliteration: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Root })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRoot(
    @common.Param() params: RootWhereUniqueInput,
    @common.Body() data: RootUpdateInput
  ): Promise<Root | null> {
    try {
      return await this.service.updateRoot({
        where: params,
        data: {
          ...data,

          challenge: data.challenge
            ? {
                connect: data.challenge,
              }
            : undefined,

          creator: data.creator
            ? {
                connect: data.creator,
              }
            : undefined,
        },
        select: {
          challenge: {
            select: {
              id: true,
            },
          },

          classicalOrigin: true,
          createdAt: true,

          creator: {
            select: {
              id: true,
            },
          },

          id: true,
          isCompleted: true,
          notes: true,
          rootLetters: true,
          status: true,
          transliteration: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Root })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRoot(
    @common.Param() params: RootWhereUniqueInput
  ): Promise<Root | null> {
    try {
      return await this.service.deleteRoot({
        where: params,
        select: {
          challenge: {
            select: {
              id: true,
            },
          },

          classicalOrigin: true,
          createdAt: true,

          creator: {
            select: {
              id: true,
            },
          },

          id: true,
          isCompleted: true,
          notes: true,
          rootLetters: true,
          status: true,
          transliteration: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/aiSuggestions")
  @ApiNestedQuery(AiSuggestionFindManyArgs)
  async findAiSuggestions(
    @common.Req() request: Request,
    @common.Param() params: RootWhereUniqueInput
  ): Promise<AiSuggestion[]> {
    const query = plainToClass(AiSuggestionFindManyArgs, request.query);
    const results = await this.service.findAiSuggestions(params.id, {
      ...query,
      select: {
        createdAt: true,

        entry: {
          select: {
            id: true,
          },
        },

        examples: true,
        formType: true,
        id: true,
        reviewedAt: true,

        reviewer: {
          select: {
            id: true,
          },
        },

        root: {
          select: {
            id: true,
          },
        },

        status: true,
        suggestedDefinition: true,
        suggestedWord: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/aiSuggestions")
  async connectAiSuggestions(
    @common.Param() params: RootWhereUniqueInput,
    @common.Body() body: AiSuggestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aiSuggestions: {
        connect: body,
      },
    };
    await this.service.updateRoot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/aiSuggestions")
  async updateAiSuggestions(
    @common.Param() params: RootWhereUniqueInput,
    @common.Body() body: AiSuggestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aiSuggestions: {
        set: body,
      },
    };
    await this.service.updateRoot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/aiSuggestions")
  async disconnectAiSuggestions(
    @common.Param() params: RootWhereUniqueInput,
    @common.Body() body: AiSuggestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      aiSuggestions: {
        disconnect: body,
      },
    };
    await this.service.updateRoot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/entries")
  @ApiNestedQuery(DictionaryEntryFindManyArgs)
  async findEntries(
    @common.Req() request: Request,
    @common.Param() params: RootWhereUniqueInput
  ): Promise<DictionaryEntry[]> {
    const query = plainToClass(DictionaryEntryFindManyArgs, request.query);
    const results = await this.service.findEntries(params.id, {
      ...query,
      select: {
        approvalDate: true,

        approvalUser: {
          select: {
            id: true,
          },
        },

        audioFilePath: true,
        createdAt: true,

        creator: {
          select: {
            id: true,
          },
        },

        id: true,
        isChallengeWord: true,

        lastEditor: {
          select: {
            id: true,
          },
        },

        originType: true,
        partOfSpeech: true,

        root: {
          select: {
            id: true,
          },
        },

        status: true,
        transliteration: true,
        updatedAt: true,
        verbForm: true,
        word: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/entries")
  async connectEntries(
    @common.Param() params: RootWhereUniqueInput,
    @common.Body() body: DictionaryEntryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entries: {
        connect: body,
      },
    };
    await this.service.updateRoot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/entries")
  async updateEntries(
    @common.Param() params: RootWhereUniqueInput,
    @common.Body() body: DictionaryEntryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entries: {
        set: body,
      },
    };
    await this.service.updateRoot({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/entries")
  async disconnectEntries(
    @common.Param() params: RootWhereUniqueInput,
    @common.Body() body: DictionaryEntryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      entries: {
        disconnect: body,
      },
    };
    await this.service.updateRoot({
      where: params,
      data,
      select: { id: true },
    });
  }
}
