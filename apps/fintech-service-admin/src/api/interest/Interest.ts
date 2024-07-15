import { Wallet } from "../wallet/Wallet";

export type Interest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rate: number | null;
  date: Date | null;
  wallet?: Wallet | null;
};
