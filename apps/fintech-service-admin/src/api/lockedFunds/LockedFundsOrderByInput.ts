import { SortOrder } from "../../util/SortOrder";

export type LockedFundsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  walletId?: SortOrder;
};
