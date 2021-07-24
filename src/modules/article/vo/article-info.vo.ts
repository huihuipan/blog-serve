import { ApiProperty, IntersectionType, OmitType } from "@nestjs/swagger";
import { CommonDTO } from "src/common/dto/common.dto";
import { SuccessVO } from "src/common/dto/success.dto";
import { ArticleDTO } from "../dto/article.dto";

export class ArticleInfoItem extends IntersectionType(
  CommonDTO, 
  OmitType(ArticleDTO, ['content'] as const)
) {}

export class ArticleInfoVO {
  /**
   * 详情信息
   */
  // @ApiProperty({ type: () => ArticleInfoItem, example: ArticleInfoItem })
  info: ArticleInfoItem
}

export class ArticleInfoSuccessVO extends SuccessVO {
  data: {
    info: ArticleInfoItem
  }
} 