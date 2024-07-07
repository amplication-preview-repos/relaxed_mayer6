export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  fundingGoal: number | null;
  status?: "Option1" | null;
};
