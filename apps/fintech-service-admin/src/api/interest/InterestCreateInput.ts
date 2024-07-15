import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type InterestCreateInput = {
  rate?: number | null;
  date?: Date | null;
  wallet?: WalletWhereUniqueInput | null;
};
