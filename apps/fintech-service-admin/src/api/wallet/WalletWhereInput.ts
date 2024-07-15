import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DepositListRelationFilter } from "../deposit/DepositListRelationFilter";
import { InterestListRelationFilter } from "../interest/InterestListRelationFilter";
import { LockedFundsListRelationFilter } from "../lockedFunds/LockedFundsListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletWhereInput = {
  id?: StringFilter;
  balance?: FloatNullableFilter;
  deposits?: DepositListRelationFilter;
  interests?: InterestListRelationFilter;
  lockedFundsItems?: LockedFundsListRelationFilter;
  user?: UserWhereUniqueInput;
};
