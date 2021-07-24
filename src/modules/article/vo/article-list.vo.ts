import { IntersectionType, OmitType } from "@nestjs/swagger";
import { CommonDTO } from "src/common/dto/common.dto";
import { PaginationDTO } from "src/common/dto/pagination.dto";
import { SuccessVO } from "src/common/dto/success.dto";
import { ArticleDTO } from "../dto/article.dto";
export class ArticleListItem extends IntersectionType(
  CommonDTO, 
  OmitType(ArticleDTO, ['content'] as const)
) {}

export class ArticleListVO {
  list: ArticleListItem[]
  pagination: PaginationDTO
}

export class ArticleListSuccessVO extends SuccessVO{
  /**
   * 返回数据
   */
  data: {
    list: ArticleListItem[]
    pagination: PaginationDTO
  }
} 

