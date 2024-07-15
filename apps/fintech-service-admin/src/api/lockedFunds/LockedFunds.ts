import { Wallet } from "../wallet/Wallet";

export type LockedFunds = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  startDate: Date | null;
  endDate: Date | null;
  wallet?: Wallet | null;
};
