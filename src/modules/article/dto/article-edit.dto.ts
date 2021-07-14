import { IsNotEmpty, IsOptional } from "class-validator";
import { IdDTO } from "./id.dto";

export class ArticleEditDTO extends IdDTO {
  @IsOptional()
  @IsNotEmpty({ message: '请输入文章标题' })
  readonly title?: string;

  @IsOptional()
  @IsNotEmpty({ message: '请输入文章描述' })
  readonly description?: string;

  @IsOptional()
  @IsNotEmpty({ message: '请输入文章内容' })
  readonly content?: string;
}



