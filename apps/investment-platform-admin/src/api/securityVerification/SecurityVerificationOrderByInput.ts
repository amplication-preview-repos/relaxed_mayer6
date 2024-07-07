import { SortOrder } from "../../util/SortOrder";

export type SecurityVerificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isVerified?: SortOrder;
  verificationDate?: SortOrder;
};
