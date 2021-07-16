import { ApiProperty } from '@nestjs/swagger'

class ArticleBaseItem {
  @ApiProperty({ description: '文章id', example: 1 })
  id: number;

  @ApiProperty({ description: '创建时间', example: '2021-07-03' }) 
  createTime: Date

  @ApiProperty({ description: '更新时间', example: '2021-07-03' }) 
  updateTime: Date

  @ApiProperty({ description: '文章标题', example: '文章标题' }) 
  title: string;

  @ApiProperty({ description: '文章描述', example: '文章描述' }) 
  description: string;
}

export class ArticleListItem extends ArticleBaseItem {}


export class ArticleInfoItem extends ArticleBaseItem {
  @ApiProperty({ description: '文章内容', example: '文章内容' }) 
  content: string;
}