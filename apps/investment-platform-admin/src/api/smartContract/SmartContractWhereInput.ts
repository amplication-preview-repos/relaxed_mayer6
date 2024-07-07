import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SmartContractWhereInput = {
  id?: StringFilter;
  contractAddress?: StringNullableFilter;
  network?: StringNullableFilter;
};
