import { SortOrder } from "../../util/SortOrder";

export type InterestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rate?: SortOrder;
  date?: SortOrder;
  walletId?: SortOrder;
};
