import { CommonDTO } from "src/common/dto/common.dto";
import { PaginationDTO } from "src/common/dto/pagination.dto";
import { SuccessVO } from "src/common/dto/success.dto";
import { TagUpdateDTO } from "src/modules/tag/dto/tag-update.dto";
import { ArticleDTO } from "../dto/article.dto";
export class ArticleListItem implements CommonDTO, ArticleDTO{
  createTime: Date;
  updateTime: Date;
  isDelete: boolean;
  version: number;
  id: number;
  title: string;
  description: string;
  content: string;
  tags?: TagUpdateDTO[];
}

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

