import { Common } from "@/common/entity/common.entity";
import { Article } from "@/modules/article/entity/article.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity()
export class Tag extends Common{
  // 标签名称
  @Column()
  label: string

  // 文章
  @ManyToMany(() => Article, article => article.tags)
  articles: Article[];
}