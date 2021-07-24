import { IntersectionType, PartialType } from "@nestjs/swagger";
import { IdDTO } from "src/common/dto/id.dto";
import { ArticleDTO } from "./article.dto";

export class ArticleEditDTO extends IntersectionType(
  IdDTO,
  PartialType(ArticleDTO)
){}
