import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type LockedFundsUpdateInput = {
  amount?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  wallet?: WalletWhereUniqueInput | null;
};
