import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { ChallengeRootList } from "./challengeRoot/ChallengeRootList";
import { ChallengeRootCreate } from "./challengeRoot/ChallengeRootCreate";
import { ChallengeRootEdit } from "./challengeRoot/ChallengeRootEdit";
import { ChallengeRootShow } from "./challengeRoot/ChallengeRootShow";
import { RootList } from "./root/RootList";
import { RootCreate } from "./root/RootCreate";
import { RootEdit } from "./root/RootEdit";
import { RootShow } from "./root/RootShow";
import { DictionaryEntryList } from "./dictionaryEntry/DictionaryEntryList";
import { DictionaryEntryCreate } from "./dictionaryEntry/DictionaryEntryCreate";
import { DictionaryEntryEdit } from "./dictionaryEntry/DictionaryEntryEdit";
import { DictionaryEntryShow } from "./dictionaryEntry/DictionaryEntryShow";
import { DefinitionList } from "./definition/DefinitionList";
import { DefinitionCreate } from "./definition/DefinitionCreate";
import { DefinitionEdit } from "./definition/DefinitionEdit";
import { DefinitionShow } from "./definition/DefinitionShow";
import { ExampleList } from "./example/ExampleList";
import { ExampleCreate } from "./example/ExampleCreate";
import { ExampleEdit } from "./example/ExampleEdit";
import { ExampleShow } from "./example/ExampleShow";
import { SubmissionList } from "./submission/SubmissionList";
import { SubmissionCreate } from "./submission/SubmissionCreate";
import { SubmissionEdit } from "./submission/SubmissionEdit";
import { SubmissionShow } from "./submission/SubmissionShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { BadgeList } from "./badge/BadgeList";
import { BadgeCreate } from "./badge/BadgeCreate";
import { BadgeEdit } from "./badge/BadgeEdit";
import { BadgeShow } from "./badge/BadgeShow";
import { UserBadgeList } from "./userBadge/UserBadgeList";
import { UserBadgeCreate } from "./userBadge/UserBadgeCreate";
import { UserBadgeEdit } from "./userBadge/UserBadgeEdit";
import { UserBadgeShow } from "./userBadge/UserBadgeShow";
import { ActivityList } from "./activity/ActivityList";
import { ActivityCreate } from "./activity/ActivityCreate";
import { ActivityEdit } from "./activity/ActivityEdit";
import { ActivityShow } from "./activity/ActivityShow";
import { DocumentList } from "./document/DocumentList";
import { DocumentCreate } from "./document/DocumentCreate";
import { DocumentEdit } from "./document/DocumentEdit";
import { DocumentShow } from "./document/DocumentShow";
import { ExtractedWordList } from "./extractedWord/ExtractedWordList";
import { ExtractedWordCreate } from "./extractedWord/ExtractedWordCreate";
import { ExtractedWordEdit } from "./extractedWord/ExtractedWordEdit";
import { ExtractedWordShow } from "./extractedWord/ExtractedWordShow";
import { AiSuggestionList } from "./aiSuggestion/AiSuggestionList";
import { AiSuggestionCreate } from "./aiSuggestion/AiSuggestionCreate";
import { AiSuggestionEdit } from "./aiSuggestion/AiSuggestionEdit";
import { AiSuggestionShow } from "./aiSuggestion/AiSuggestionShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { AuditLogList } from "./auditLog/AuditLogList";
import { AuditLogCreate } from "./auditLog/AuditLogCreate";
import { AuditLogEdit } from "./auditLog/AuditLogEdit";
import { AuditLogShow } from "./auditLog/AuditLogShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Hassaniya Dictionary Platform"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="ChallengeRoot"
          list={ChallengeRootList}
          edit={ChallengeRootEdit}
          create={ChallengeRootCreate}
          show={ChallengeRootShow}
        />
        <Resource
          name="Root"
          list={RootList}
          edit={RootEdit}
          create={RootCreate}
          show={RootShow}
        />
        <Resource
          name="DictionaryEntry"
          list={DictionaryEntryList}
          edit={DictionaryEntryEdit}
          create={DictionaryEntryCreate}
          show={DictionaryEntryShow}
        />
        <Resource
          name="Definition"
          list={DefinitionList}
          edit={DefinitionEdit}
          create={DefinitionCreate}
          show={DefinitionShow}
        />
        <Resource
          name="Example"
          list={ExampleList}
          edit={ExampleEdit}
          create={ExampleCreate}
          show={ExampleShow}
        />
        <Resource
          name="Submission"
          list={SubmissionList}
          edit={SubmissionEdit}
          create={SubmissionCreate}
          show={SubmissionShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Badge"
          list={BadgeList}
          edit={BadgeEdit}
          create={BadgeCreate}
          show={BadgeShow}
        />
        <Resource
          name="UserBadge"
          list={UserBadgeList}
          edit={UserBadgeEdit}
          create={UserBadgeCreate}
          show={UserBadgeShow}
        />
        <Resource
          name="Activity"
          list={ActivityList}
          edit={ActivityEdit}
          create={ActivityCreate}
          show={ActivityShow}
        />
        <Resource
          name="Document"
          list={DocumentList}
          edit={DocumentEdit}
          create={DocumentCreate}
          show={DocumentShow}
        />
        <Resource
          name="ExtractedWord"
          list={ExtractedWordList}
          edit={ExtractedWordEdit}
          create={ExtractedWordCreate}
          show={ExtractedWordShow}
        />
        <Resource
          name="AiSuggestion"
          list={AiSuggestionList}
          edit={AiSuggestionEdit}
          create={AiSuggestionCreate}
          show={AiSuggestionShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="AuditLog"
          list={AuditLogList}
          edit={AuditLogEdit}
          create={AuditLogCreate}
          show={AuditLogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
