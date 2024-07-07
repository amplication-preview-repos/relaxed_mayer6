import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SecurityVerificationService } from "./securityVerification.service";
import { SecurityVerificationControllerBase } from "./base/securityVerification.controller.base";

@swagger.ApiTags("securityVerifications")
@common.Controller("securityVerifications")
export class SecurityVerificationController extends SecurityVerificationControllerBase {
  constructor(
    protected readonly service: SecurityVerificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
