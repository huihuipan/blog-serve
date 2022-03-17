import { IsNotEmpty } from "class-validator";
import { TagUpdateDTO } from "src/modules/tag/dto/tag-update.dto";
export class ArticleDTO {

  /**
   * 文章标题
   */
  @IsNotEmpty({ message: '请输入文章标题' })
  readonly title: string;

  /**
   * 文章简述
   */
  @IsNotEmpty({ message: '请输入文章描述' })
  readonly description: string;

  /**
   * 文章内容
   */
  @IsNotEmpty({ message: '请输入文章内容' })
  readonly content: string;

  /**
   * 标签 格式 [{id: 1}, {id: 2}]
   */
  readonly tags?: TagUpdateDTO[]

}