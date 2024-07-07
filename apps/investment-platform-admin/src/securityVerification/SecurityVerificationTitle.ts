import { SecurityVerification as TSecurityVerification } from "../api/securityVerification/SecurityVerification";

export const SECURITYVERIFICATION_TITLE_FIELD = "id";

export const SecurityVerificationTitle = (
  record: TSecurityVerification
): string => {
  return record.id?.toString() || String(record.id);
};
