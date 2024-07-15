import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LockedFundsModuleBase } from "./base/lockedFunds.module.base";
import { LockedFundsService } from "./lockedFunds.service";
import { LockedFundsController } from "./lockedFunds.controller";
import { LockedFundsResolver } from "./lockedFunds.resolver";

@Module({
  imports: [LockedFundsModuleBase, forwardRef(() => AuthModule)],
  controllers: [LockedFundsController],
  providers: [LockedFundsService, LockedFundsResolver],
  exports: [LockedFundsService],
})
export class LockedFundsModule {}
