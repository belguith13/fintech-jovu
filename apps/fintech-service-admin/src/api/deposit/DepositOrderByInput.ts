import { SortOrder } from "../../util/SortOrder";

export type DepositOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  amount?: SortOrder;
  walletId?: SortOrder;
};
