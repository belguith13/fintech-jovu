import { JsonValue } from "type-fest";
import { Wallet } from "../wallet/Wallet";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  wallets?: Array<Wallet>;
};
