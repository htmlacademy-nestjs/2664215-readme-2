import { Body, Controller, Post } from '@nestjs/common';

import { fillRdo } from '@project/helpers';

import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRdo } from './rdo/user.rdo';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authorizationService: AuthenticationService) {}

  @Post('register')
  public async register(@Body() dto: CreateUserDto) {
    const newUser = await this.authorizationService.register(dto);
    return fillRdo(UserRdo, newUser.convertToObject());
  }
}
