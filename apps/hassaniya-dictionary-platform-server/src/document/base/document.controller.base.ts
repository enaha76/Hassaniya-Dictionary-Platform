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
import { DocumentService } from "../document.service";
import { DocumentCreateInput } from "./DocumentCreateInput";
import { Document } from "./Document";
import { DocumentFindManyArgs } from "./DocumentFindManyArgs";
import { DocumentWhereUniqueInput } from "./DocumentWhereUniqueInput";
import { DocumentUpdateInput } from "./DocumentUpdateInput";
import { ExtractedWordFindManyArgs } from "../../extractedWord/base/ExtractedWordFindManyArgs";
import { ExtractedWord } from "../../extractedWord/base/ExtractedWord";
import { ExtractedWordWhereUniqueInput } from "../../extractedWord/base/ExtractedWordWhereUniqueInput";

export class DocumentControllerBase {
  constructor(protected readonly service: DocumentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Document })
  async createDocument(
    @common.Body() data: DocumentCreateInput
  ): Promise<Document> {
    return await this.service.createDocument({
      data: {
        ...data,

        uploader: data.uploader
          ? {
              connect: data.uploader,
            }
          : undefined,
      },
      select: {
        documentName: true,
        documentType: true,
        filePath: true,
        id: true,
        language: true,
        newWordCount: true,
        processingStatus: true,
        uploadedAt: true,

        uploader: {
          select: {
            id: true,
          },
        },

        wordCount: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Document] })
  @ApiNestedQuery(DocumentFindManyArgs)
  async documents(@common.Req() request: Request): Promise<Document[]> {
    const args = plainToClass(DocumentFindManyArgs, request.query);
    return this.service.documents({
      ...args,
      select: {
        documentName: true,
        documentType: true,
        filePath: true,
        id: true,
        language: true,
        newWordCount: true,
        processingStatus: true,
        uploadedAt: true,

        uploader: {
          select: {
            id: true,
          },
        },

        wordCount: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async document(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    const result = await this.service.document({
      where: params,
      select: {
        documentName: true,
        documentType: true,
        filePath: true,
        id: true,
        language: true,
        newWordCount: true,
        processingStatus: true,
        uploadedAt: true,

        uploader: {
          select: {
            id: true,
          },
        },

        wordCount: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocument(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() data: DocumentUpdateInput
  ): Promise<Document | null> {
    try {
      return await this.service.updateDocument({
        where: params,
        data: {
          ...data,

          uploader: data.uploader
            ? {
                connect: data.uploader,
              }
            : undefined,
        },
        select: {
          documentName: true,
          documentType: true,
          filePath: true,
          id: true,
          language: true,
          newWordCount: true,
          processingStatus: true,
          uploadedAt: true,

          uploader: {
            select: {
              id: true,
            },
          },

          wordCount: true,
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
  @swagger.ApiOkResponse({ type: Document })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocument(
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<Document | null> {
    try {
      return await this.service.deleteDocument({
        where: params,
        select: {
          documentName: true,
          documentType: true,
          filePath: true,
          id: true,
          language: true,
          newWordCount: true,
          processingStatus: true,
          uploadedAt: true,

          uploader: {
            select: {
              id: true,
            },
          },

          wordCount: true,
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

  @common.Get("/:id/extractedWords")
  @ApiNestedQuery(ExtractedWordFindManyArgs)
  async findExtractedWords(
    @common.Req() request: Request,
    @common.Param() params: DocumentWhereUniqueInput
  ): Promise<ExtractedWord[]> {
    const query = plainToClass(ExtractedWordFindManyArgs, request.query);
    const results = await this.service.findExtractedWords(params.id, {
      ...query,
      select: {
        context: true,

        document: {
          select: {
            id: true,
          },
        },

        entry: {
          select: {
            id: true,
          },
        },

        id: true,
        isNew: true,
        isProcessed: true,
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

  @common.Post("/:id/extractedWords")
  async connectExtractedWords(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: ExtractedWordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      extractedWords: {
        connect: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/extractedWords")
  async updateExtractedWords(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: ExtractedWordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      extractedWords: {
        set: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/extractedWords")
  async disconnectExtractedWords(
    @common.Param() params: DocumentWhereUniqueInput,
    @common.Body() body: ExtractedWordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      extractedWords: {
        disconnect: body,
      },
    };
    await this.service.updateDocument({
      where: params,
      data,
      select: { id: true },
    });
  }
}
