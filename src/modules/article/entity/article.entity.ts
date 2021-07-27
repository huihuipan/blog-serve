import { Common } from 'src/common/entity/common.entity';
import { Tag } from 'src/modules/tag/entity/tag.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Article extends Common{
  
    // 文章标题
    @Column('text')
    title: string;

    // 文章描述
    @Column('text')
    description: string;

    // 文章内容
    @Column('text')
    content: string;

    // 标签
    @ManyToMany(() => Tag, tag => tag.articles)
    @JoinTable()
    tags: Tag[];

}