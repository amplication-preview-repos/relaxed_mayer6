import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type InvestmentWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  status?: "Option1";
};
