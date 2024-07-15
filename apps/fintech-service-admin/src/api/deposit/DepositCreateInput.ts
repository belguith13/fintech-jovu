import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type DepositCreateInput = {
  date?: Date | null;
  amount?: number | null;
  wallet?: WalletWhereUniqueInput | null;
};
