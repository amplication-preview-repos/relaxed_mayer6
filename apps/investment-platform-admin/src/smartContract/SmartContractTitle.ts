import { SmartContract as TSmartContract } from "../api/smartContract/SmartContract";

export const SMARTCONTRACT_TITLE_FIELD = "contractAddress";

export const SmartContractTitle = (record: TSmartContract): string => {
  return record.contractAddress?.toString() || String(record.id);
};
