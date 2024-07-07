import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SecurityVerificationResolverBase } from "./base/securityVerification.resolver.base";
import { SecurityVerification } from "./base/SecurityVerification";
import { SecurityVerificationService } from "./securityVerification.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SecurityVerification)
export class SecurityVerificationResolver extends SecurityVerificationResolverBase {
  constructor(
    protected readonly service: SecurityVerificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
