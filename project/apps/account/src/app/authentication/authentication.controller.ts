import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { fillRdo } from '@project/helpers';

import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserRdo } from './rdo/user.rdo';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authorizationService: AuthenticationService) {}

  @Post('register')
  public async register(@Body() dto: CreateUserDto) {
    const user = await this.authorizationService.register(dto);
    return fillRdo(UserRdo, user.convertToObject());
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authorizationService.verify(dto);
    return fillRdo(UserRdo, user.convertToObject());
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const user = await this.authorizationService.getUser(id);
    return fillRdo(UserRdo, user.convertToObject());
  }
}
