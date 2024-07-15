import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type InterestUpdateInput = {
  rate?: number | null;
  date?: Date | null;
  wallet?: WalletWhereUniqueInput | null;
};
