import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type DepositWhereInput = {
  id?: StringFilter;
  date?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  wallet?: WalletWhereUniqueInput;
};
