import { LockedFunds as TLockedFunds } from "../api/lockedFunds/LockedFunds";

export const LOCKEDFUNDS_TITLE_FIELD = "id";

export const LockedFundsTitle = (record: TLockedFunds): string => {
  return record.id?.toString() || String(record.id);
};
