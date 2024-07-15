import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LockedFundsServiceBase } from "./base/lockedFunds.service.base";

@Injectable()
export class LockedFundsService extends LockedFundsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
