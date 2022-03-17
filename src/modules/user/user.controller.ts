/**
 * 用户模块
 */

import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UserService } from './user.service';
import { TokenSuccessVO, TokenVO } from './vo/token.vo';
import { UserInfoSuccessVO } from './vo/user-info.vo';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Post('register')
  async register(
    @Body() registerDTO: RegisterDTO
  ): Promise<UserInfoSuccessVO> {
    return this.userService.register(registerDTO)
  }

  @Post('login')
  async login(
    @Body() loginDTO: LoginDTO
  ): Promise<TokenVO> {
    return this.userService.login(loginDTO)
  }
}
