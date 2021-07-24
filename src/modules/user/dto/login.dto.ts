import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches } from "class-validator"
import { regMobileCN } from "src/utils/regex.util";

export class LoginDTO {

  /**
   * 手机号（系统唯一）
   * @example 13088888888
   */
  @Matches(regMobileCN, { message: '请输入正确手机号' })
  @IsNotEmpty({ message: '请输入手机号' })
  readonly mobile: string;

  /**
   * 用户密码
   * @example 123456
   */
  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;
}