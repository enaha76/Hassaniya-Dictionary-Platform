/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ActivityListRelationFilter } from "../../activity/base/ActivityListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DictionaryEntryListRelationFilter } from "../../dictionaryEntry/base/DictionaryEntryListRelationFilter";
import { AuditLogListRelationFilter } from "../../auditLog/base/AuditLogListRelationFilter";
import { CommentListRelationFilter } from "../../comment/base/CommentListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DefinitionListRelationFilter } from "../../definition/base/DefinitionListRelationFilter";
import { ExampleListRelationFilter } from "../../example/base/ExampleListRelationFilter";
import { RootListRelationFilter } from "../../root/base/RootListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AiSuggestionListRelationFilter } from "../../aiSuggestion/base/AiSuggestionListRelationFilter";
import { SubmissionListRelationFilter } from "../../submission/base/SubmissionListRelationFilter";
import { DocumentListRelationFilter } from "../../document/base/DocumentListRelationFilter";
import { UserBadgeListRelationFilter } from "../../userBadge/base/UserBadgeListRelationFilter";
import { UserRoleListRelationFilter } from "../../userRole/base/UserRoleListRelationFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => ActivityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ActivityListRelationFilter)
  @IsOptional()
  @Field(() => ActivityListRelationFilter, {
    nullable: true,
  })
  activities?: ActivityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DictionaryEntryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DictionaryEntryListRelationFilter)
  @IsOptional()
  @Field(() => DictionaryEntryListRelationFilter, {
    nullable: true,
  })
  approvedEntries?: DictionaryEntryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AuditLogListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AuditLogListRelationFilter)
  @IsOptional()
  @Field(() => AuditLogListRelationFilter, {
    nullable: true,
  })
  auditLogs?: AuditLogListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentListRelationFilter)
  @IsOptional()
  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => DefinitionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DefinitionListRelationFilter)
  @IsOptional()
  @Field(() => DefinitionListRelationFilter, {
    nullable: true,
  })
  createdDefinitions?: DefinitionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DictionaryEntryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DictionaryEntryListRelationFilter)
  @IsOptional()
  @Field(() => DictionaryEntryListRelationFilter, {
    nullable: true,
  })
  createdEntries?: DictionaryEntryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ExampleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExampleListRelationFilter)
  @IsOptional()
  @Field(() => ExampleListRelationFilter, {
    nullable: true,
  })
  createdExamples?: ExampleListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RootListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RootListRelationFilter)
  @IsOptional()
  @Field(() => RootListRelationFilter, {
    nullable: true,
  })
  createdRoots?: RootListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DictionaryEntryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DictionaryEntryListRelationFilter)
  @IsOptional()
  @Field(() => DictionaryEntryListRelationFilter, {
    nullable: true,
  })
  editedEntries?: DictionaryEntryListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fullName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  isActive?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  languageProficiency?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  lastLogin?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  level?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  passwordHash?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  points?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  profileImage?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AiSuggestionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AiSuggestionListRelationFilter)
  @IsOptional()
  @Field(() => AiSuggestionListRelationFilter, {
    nullable: true,
  })
  reviewedSuggestions?: AiSuggestionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SubmissionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubmissionListRelationFilter)
  @IsOptional()
  @Field(() => SubmissionListRelationFilter, {
    nullable: true,
  })
  reviews?: SubmissionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SubmissionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SubmissionListRelationFilter)
  @IsOptional()
  @Field(() => SubmissionListRelationFilter, {
    nullable: true,
  })
  submissions?: SubmissionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DocumentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DocumentListRelationFilter)
  @IsOptional()
  @Field(() => DocumentListRelationFilter, {
    nullable: true,
  })
  uploadedDocuments?: DocumentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserBadgeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserBadgeListRelationFilter)
  @IsOptional()
  @Field(() => UserBadgeListRelationFilter, {
    nullable: true,
  })
  userBadges?: UserBadgeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserRoleListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserRoleListRelationFilter)
  @IsOptional()
  @Field(() => UserRoleListRelationFilter, {
    nullable: true,
  })
  userRoles?: UserRoleListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;
}

export { UserWhereInput as UserWhereInput };
