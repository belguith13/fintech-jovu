import { DepositCreateNestedManyWithoutWalletsInput } from "./DepositCreateNestedManyWithoutWalletsInput";
import { InterestCreateNestedManyWithoutWalletsInput } from "./InterestCreateNestedManyWithoutWalletsInput";
import { LockedFundsCreateNestedManyWithoutWalletsInput } from "./LockedFundsCreateNestedManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletCreateInput = {
  balance?: number | null;
  deposits?: DepositCreateNestedManyWithoutWalletsInput;
  interests?: InterestCreateNestedManyWithoutWalletsInput;
  lockedFundsItems?: LockedFundsCreateNestedManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
