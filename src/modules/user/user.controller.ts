import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { UserService } from './user.service';
import { TokenResponse } from './vo/token.vo';
import { UserInfoResponse } from './vo/user-info.vo';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @ApiBody({ type: RegisterDTO })
  @ApiOkResponse({ description: '注册', type: UserInfoResponse })
  @Post('register')
  async register(
    @Body() registerDTO: RegisterDTO
  ): Promise<UserInfoResponse> {
    return this.userService.register(registerDTO)
  }

  @ApiBody({ type: LoginDTO })
  @ApiOkResponse({ description: '登陆', type: TokenResponse })
  @Post('login')
  async login(
    @Body() loginDTO: LoginDTO
  ): Promise<any> {
    return this.userService.login(loginDTO)
  }
}
