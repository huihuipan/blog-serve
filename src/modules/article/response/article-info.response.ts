import { ApiProperty } from "@nestjs/swagger";
import { ArticleInfoItem } from "./article-base.response";

export class ArticleInfoData {
  @ApiProperty({ type: ArticleInfoItem })
  info: ArticleInfoItem
}

export class ArticleInfoResponse {
  @ApiProperty({ description: '状态码', example: 200, })
  code: number

  @ApiProperty({ description: '数据',
    type: () => ArticleInfoData, example: ArticleInfoData, })
  data: ArticleInfoData

  @ApiProperty({ description: '请求结果信息', example: '请求成功' })
  message: string
} 