import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  languageProficiency?: SortOrder;
  lastLogin?: SortOrder;
  level?: SortOrder;
  passwordHash?: SortOrder;
  points?: SortOrder;
  profileImage?: SortOrder;
  username?: SortOrder;
};
