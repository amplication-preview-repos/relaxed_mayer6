import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SecurityVerificationWhereInput = {
  id?: StringFilter;
  isVerified?: BooleanNullableFilter;
  verificationDate?: DateTimeNullableFilter;
};
