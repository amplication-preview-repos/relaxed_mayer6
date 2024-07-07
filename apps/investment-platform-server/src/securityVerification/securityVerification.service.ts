import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SecurityVerificationServiceBase } from "./base/securityVerification.service.base";

@Injectable()
export class SecurityVerificationService extends SecurityVerificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
