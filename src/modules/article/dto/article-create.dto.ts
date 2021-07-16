import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class ArticleCreateDTO {
  @ApiProperty({
    description: '文章标题',
    example: '啊！美丽的大海',
  })
  @IsNotEmpty({ message: '请输入文章标题' })
  readonly title: string;

  @ApiProperty({
    description: '文章描述/简介',
    example: '给你讲述美丽的大海',
  })
  @IsNotEmpty({ message: '请输入文章描述' })
  readonly description: string;

  @ApiProperty({
    description: '文章内容',
    example: '啊！美丽的大海，你是如此美丽',
  })
  @IsNotEmpty({ message: '请输入文章内容' })
  readonly content: string;
}