import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type LockedFundsWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  wallet?: WalletWhereUniqueInput;
};
