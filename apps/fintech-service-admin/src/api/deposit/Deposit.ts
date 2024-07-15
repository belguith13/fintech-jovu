import { Wallet } from "../wallet/Wallet";

export type Deposit = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  amount: number | null;
  wallet?: Wallet | null;
};
