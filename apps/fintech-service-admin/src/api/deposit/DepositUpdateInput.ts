import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type DepositUpdateInput = {
  date?: Date | null;
  amount?: number | null;
  wallet?: WalletWhereUniqueInput | null;
};
