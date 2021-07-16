import { ApiProperty } from "@nestjs/swagger";
import { ArticleInfoItem } from "./article-base.vo";

export class ArticleInfoVO {
  @ApiProperty({ type: ArticleInfoItem })
  info: ArticleInfoItem
}

export class ArticleInfoResponse {
  @ApiProperty({ description: '状态码', example: 200, })
  code: number

  @ApiProperty({ description: '数据',
    type: () => ArticleInfoVO, example: ArticleInfoVO, })
  data: ArticleInfoVO

  @ApiProperty({ description: '请求结果信息', example: '请求成功' })
  message: string
} 
