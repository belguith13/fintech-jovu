import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WalletWhereUniqueInput } from "../wallet/WalletWhereUniqueInput";

export type InterestWhereInput = {
  id?: StringFilter;
  rate?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  wallet?: WalletWhereUniqueInput;
};
