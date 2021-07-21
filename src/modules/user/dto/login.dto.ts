import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches } from "class-validator"
import { regMobileCN } from "src/utils/regex.util";

export class LoginDTO {
  @ApiProperty({
    description: '手机号，唯一',
    example: '13049153466'
  })
  @Matches(regMobileCN, { message: '请输入正确手机号' })
  @IsNotEmpty({ message: '请输入手机号' })
  readonly mobile: string;

  @ApiProperty({
    description: '用户密码',
    example: '123456',
  })
  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;
}