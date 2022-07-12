import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(emailInput: string, passwordInput: string): Promise<any> {
    const user = await this.usersService.findByEmail(emailInput);
    if (!user) {
      throw new BadRequestException('Email não encontrado.');
    }

    const userPassword = user.password;
    const isMatch = await bcrypt.compare(passwordInput, userPassword);
    if (isMatch) {
      const { password, ...result } = user;
      return result;
    }
    throw new BadRequestException('Senha incorreta.');
  }

  async login(user: User) {
    const payload = {
      sub: user.id,
      userName: user.firstName + ' ' + user.lastName,
      email: user.email,
      roles: user.roles,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
