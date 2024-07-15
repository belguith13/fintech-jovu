import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LockedFundsResolverBase } from "./base/lockedFunds.resolver.base";
import { LockedFunds } from "./base/LockedFunds";
import { LockedFundsService } from "./lockedFunds.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LockedFunds)
export class LockedFundsResolver extends LockedFundsResolverBase {
  constructor(
    protected readonly service: LockedFundsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
