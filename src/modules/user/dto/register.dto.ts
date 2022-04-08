import { IsNotEmpty, IsString, Matches } from "class-validator"
import { regMobileCN } from "@/utils/regex.util";

export class RegisterDTO {
  /**
   * 手机号，唯一
   */
  @Matches(regMobileCN, { message: '请输入正确手机号' })
  @IsNotEmpty({ message: '请输入手机号' })
  readonly mobile: string;

  /**
   * 用户名
   */
  @IsNotEmpty({ message: '请输入用户昵称' })
  @IsString({ message: '名字必须是 String 类型'})
  readonly nickname: string;

  /**
   * 用户密码
   */
  @IsNotEmpty({ message: '请输入密码' })
  readonly password: string;

  /**
   * 二次输入密码
   */
  @IsNotEmpty({ message: '请再次输入密码' })
  readonly passwordRepeat: string
}