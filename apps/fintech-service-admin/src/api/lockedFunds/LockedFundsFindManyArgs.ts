import { LockedFundsWhereInput } from "./LockedFundsWhereInput";
import { LockedFundsOrderByInput } from "./LockedFundsOrderByInput";

export type LockedFundsFindManyArgs = {
  where?: LockedFundsWhereInput;
  orderBy?: Array<LockedFundsOrderByInput>;
  skip?: number;
  take?: number;
};
