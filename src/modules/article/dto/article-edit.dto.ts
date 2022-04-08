import { IdDTO } from "@/common/dto/id.dto";
import { TagUpdateDTO } from "@/modules/tag/dto/tag-update.dto";
import { ArticleDTO } from "./article.dto";

export class ArticleEditDTO implements IdDTO, ArticleDTO {
  id: number;
  title: string;
  description: string;
  content: string;
  tags?: TagUpdateDTO[];
}
