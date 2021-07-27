import { IsNotEmpty } from "class-validator";
export class PictureDTO {

  /**
   * 图片路径
   * @example /upload/static/1.png
   */
   @IsNotEmpty({ message: '请输入图片路径' })
   readonly src: string;

}