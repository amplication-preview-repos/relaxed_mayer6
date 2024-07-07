import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  fundingGoal?: FloatNullableFilter;
  status?: "Option1";
};
