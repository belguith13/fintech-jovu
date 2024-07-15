import { Deposit } from "../deposit/Deposit";
import { Interest } from "../interest/Interest";
import { LockedFunds } from "../lockedFunds/LockedFunds";
import { User } from "../user/User";

export type Wallet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  balance: number | null;
  deposits?: Array<Deposit>;
  interests?: Array<Interest>;
  lockedFundsItems?: Array<LockedFunds>;
  user?: User | null;
};
