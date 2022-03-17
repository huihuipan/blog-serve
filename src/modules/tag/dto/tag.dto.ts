import { IsNotEmpty } from "class-validator";

export class TagDTO {
  
  /**
   * 标签名称
   */
  @IsNotEmpty()
  label: string
}