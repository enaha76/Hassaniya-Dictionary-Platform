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
import { SettingService } from "../setting.service";
import { SettingCreateInput } from "./SettingCreateInput";
import { Setting } from "./Setting";
import { SettingFindManyArgs } from "./SettingFindManyArgs";
import { SettingWhereUniqueInput } from "./SettingWhereUniqueInput";
import { SettingUpdateInput } from "./SettingUpdateInput";

export class SettingControllerBase {
  constructor(protected readonly service: SettingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Setting })
  async createSetting(
    @common.Body() data: SettingCreateInput
  ): Promise<Setting> {
    return await this.service.createSetting({
      data: data,
      select: {
        description: true,
        id: true,
        settingGroup: true,
        settingName: true,
        settingValue: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Setting] })
  @ApiNestedQuery(SettingFindManyArgs)
  async settings(@common.Req() request: Request): Promise<Setting[]> {
    const args = plainToClass(SettingFindManyArgs, request.query);
    return this.service.settings({
      ...args,
      select: {
        description: true,
        id: true,
        settingGroup: true,
        settingName: true,
        settingValue: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Setting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async setting(
    @common.Param() params: SettingWhereUniqueInput
  ): Promise<Setting | null> {
    const result = await this.service.setting({
      where: params,
      select: {
        description: true,
        id: true,
        settingGroup: true,
        settingName: true,
        settingValue: true,
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
  @swagger.ApiOkResponse({ type: Setting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSetting(
    @common.Param() params: SettingWhereUniqueInput,
    @common.Body() data: SettingUpdateInput
  ): Promise<Setting | null> {
    try {
      return await this.service.updateSetting({
        where: params,
        data: data,
        select: {
          description: true,
          id: true,
          settingGroup: true,
          settingName: true,
          settingValue: true,
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
  @swagger.ApiOkResponse({ type: Setting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSetting(
    @common.Param() params: SettingWhereUniqueInput
  ): Promise<Setting | null> {
    try {
      return await this.service.deleteSetting({
        where: params,
        select: {
          description: true,
          id: true,
          settingGroup: true,
          settingName: true,
          settingValue: true,
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
