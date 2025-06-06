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
import { AuditLogService } from "../auditLog.service";
import { AuditLogCreateInput } from "./AuditLogCreateInput";
import { AuditLog } from "./AuditLog";
import { AuditLogFindManyArgs } from "./AuditLogFindManyArgs";
import { AuditLogWhereUniqueInput } from "./AuditLogWhereUniqueInput";
import { AuditLogUpdateInput } from "./AuditLogUpdateInput";

export class AuditLogControllerBase {
  constructor(protected readonly service: AuditLogService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AuditLog })
  async createAuditLog(
    @common.Body() data: AuditLogCreateInput
  ): Promise<AuditLog> {
    return await this.service.createAuditLog({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        action: true,
        actionTime: true,
        details: true,
        entityId: true,
        entityType: true,
        id: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AuditLog] })
  @ApiNestedQuery(AuditLogFindManyArgs)
  async auditLogs(@common.Req() request: Request): Promise<AuditLog[]> {
    const args = plainToClass(AuditLogFindManyArgs, request.query);
    return this.service.auditLogs({
      ...args,
      select: {
        action: true,
        actionTime: true,
        details: true,
        entityId: true,
        entityType: true,
        id: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AuditLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async auditLog(
    @common.Param() params: AuditLogWhereUniqueInput
  ): Promise<AuditLog | null> {
    const result = await this.service.auditLog({
      where: params,
      select: {
        action: true,
        actionTime: true,
        details: true,
        entityId: true,
        entityType: true,
        id: true,

        user: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: AuditLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAuditLog(
    @common.Param() params: AuditLogWhereUniqueInput,
    @common.Body() data: AuditLogUpdateInput
  ): Promise<AuditLog | null> {
    try {
      return await this.service.updateAuditLog({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          action: true,
          actionTime: true,
          details: true,
          entityId: true,
          entityType: true,
          id: true,

          user: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: AuditLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAuditLog(
    @common.Param() params: AuditLogWhereUniqueInput
  ): Promise<AuditLog | null> {
    try {
      return await this.service.deleteAuditLog({
        where: params,
        select: {
          action: true,
          actionTime: true,
          details: true,
          entityId: true,
          entityType: true,
          id: true,

          user: {
            select: {
              id: true,
            },
          },
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
}
