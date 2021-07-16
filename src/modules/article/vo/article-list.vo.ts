import { ApiProperty } from "@nestjs/swagger";
import { ArticleListItem } from "./article-base.vo";

class Pagination {
  @ApiProperty({ description: '第几页', example: 1 })
  page: number

  @ApiProperty({ description: '每页条数', example: 10 })
  pageSize: number

  @ApiProperty({ description: '总页数', example: 10 })
  pages: number

  @ApiProperty({ description: '总条数', example: 100 })
  total: number
}

export class ArticleListVO {
  @ApiProperty({ type: ArticleListItem, isArray: true })
  list: Array<ArticleListItem>

  @ApiProperty({ type: () => Pagination })
  pagination: Pagination
}

export class ArticleListResponse {
  @ApiProperty({ description: '状态码', example: 200, })
  code: number

  @ApiProperty({ description: '数据', type: () => ArticleListVO, example: ArticleListVO, })
  data: ArticleListVO

  @ApiProperty({ description: '请求结果信息', example: '请求成功' })
  message: string
} 
