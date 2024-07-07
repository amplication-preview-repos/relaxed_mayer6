import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  fundingGoal?: SortOrder;
  status?: SortOrder;
};
