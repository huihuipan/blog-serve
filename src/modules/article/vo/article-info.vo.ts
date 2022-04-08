import { CommonDTO } from "@/common/dto/common.dto";
import { SuccessVO } from "@/common/dto/success.dto";
import { TagUpdateDTO } from "@/modules/tag/dto/tag-update.dto";
import { ArticleDTO } from "../dto/article.dto";

export class ArticleInfoItem implements CommonDTO, ArticleDTO {
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