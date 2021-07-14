import { IsNotEmpty } from "class-validator";

export class ArticleCreateDTO {

  @IsNotEmpty({ message: '请输入文章标题' })
  readonly title: string;

  @IsNotEmpty({ message: '请输入文章描述' })
  readonly description: string;

  @IsNotEmpty({ message: '请输入文章内容' })
  readonly content: string;
}