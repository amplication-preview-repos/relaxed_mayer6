import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SecurityVerificationModuleBase } from "./base/securityVerification.module.base";
import { SecurityVerificationService } from "./securityVerification.service";
import { SecurityVerificationController } from "./securityVerification.controller";
import { SecurityVerificationResolver } from "./securityVerification.resolver";

@Module({
  imports: [SecurityVerificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [SecurityVerificationController],
  providers: [SecurityVerificationService, SecurityVerificationResolver],
  exports: [SecurityVerificationService],
})
export class SecurityVerificationModule {}
