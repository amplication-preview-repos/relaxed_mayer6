export type SmartContract = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  contractAddress: string | null;
  network: string | null;
};
