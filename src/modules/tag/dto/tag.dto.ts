import { IsNotEmpty } from "class-validator";

export class TagDTO {
  
  /**
   * 标签名称
   * @example 标签1
   */
  @IsNotEmpty()
  label: string
}