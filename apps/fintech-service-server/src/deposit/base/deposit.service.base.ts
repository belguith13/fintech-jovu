/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Deposit as PrismaDeposit,
  Wallet as PrismaWallet,
} from "@prisma/client";

export class DepositServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.DepositCountArgs, "select">): Promise<number> {
    return this.prisma.deposit.count(args);
  }

  async deposits(args: Prisma.DepositFindManyArgs): Promise<PrismaDeposit[]> {
    return this.prisma.deposit.findMany(args);
  }
  async deposit(
    args: Prisma.DepositFindUniqueArgs
  ): Promise<PrismaDeposit | null> {
    return this.prisma.deposit.findUnique(args);
  }
  async createDeposit(args: Prisma.DepositCreateArgs): Promise<PrismaDeposit> {
    return this.prisma.deposit.create(args);
  }
  async updateDeposit(args: Prisma.DepositUpdateArgs): Promise<PrismaDeposit> {
    return this.prisma.deposit.update(args);
  }
  async deleteDeposit(args: Prisma.DepositDeleteArgs): Promise<PrismaDeposit> {
    return this.prisma.deposit.delete(args);
  }

  async getWallet(parentId: string): Promise<PrismaWallet | null> {
    return this.prisma.deposit
      .findUnique({
        where: { id: parentId },
      })
      .wallet();
  }
}
