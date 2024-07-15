import { DepositUpdateManyWithoutWalletsInput } from "./DepositUpdateManyWithoutWalletsInput";
import { InterestUpdateManyWithoutWalletsInput } from "./InterestUpdateManyWithoutWalletsInput";
import { LockedFundsUpdateManyWithoutWalletsInput } from "./LockedFundsUpdateManyWithoutWalletsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WalletUpdateInput = {
  balance?: number | null;
  deposits?: DepositUpdateManyWithoutWalletsInput;
  interests?: InterestUpdateManyWithoutWalletsInput;
  lockedFundsItems?: LockedFundsUpdateManyWithoutWalletsInput;
  user?: UserWhereUniqueInput | null;
};
