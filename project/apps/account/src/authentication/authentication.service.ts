import { ConflictException, Injectable } from '@nestjs/common';

import { AUTH_USER_EXISTS } from './authentication.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthenticationService {
  constructor(private readonly blogUserRepository: UserRepository) {}

  public async register(dto: CreateUserDto) {
    const { email, name, password, avatarUrl } = dto;

    const existingUser = this.blogUserRepository.findByEmail(email);

    if (!existingUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new UserEntity({
      email,
      name,
      avatarUrl,
      passwordHash: '',
    }).setPassword(password);

    return this.blogUserRepository.save(userEntity);
  }
}
