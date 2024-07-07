import { SortOrder } from "../../util/SortOrder";

export type SmartContractOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  contractAddress?: SortOrder;
  network?: SortOrder;
};
