import { SecurityVerificationWhereInput } from "./SecurityVerificationWhereInput";
import { SecurityVerificationOrderByInput } from "./SecurityVerificationOrderByInput";

export type SecurityVerificationFindManyArgs = {
  where?: SecurityVerificationWhereInput;
  orderBy?: Array<SecurityVerificationOrderByInput>;
  skip?: number;
  take?: number;
};
