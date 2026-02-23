import { Module } from '@nestjs/common';

import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { BlogUserRepository } from "./blog-user.repository";

@Module({
  controllers: [AuthenticationController],
  providers: [AuthenticationService, BlogUserRepository],
})
export class AuthenticationModule {}
