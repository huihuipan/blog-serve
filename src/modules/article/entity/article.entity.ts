import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class Article {
    // 主键id
    @PrimaryGeneratedColumn()
    id: number;
  
    // 创建时间
    @CreateDateColumn()
    createTime: Date
  
    // 更新时间
    @UpdateDateColumn()
    updateTime: Date
  
    // 软删除
    @Column({
      default: false
    })
    isDelete: boolean
  
    // 更新次数
    @VersionColumn()
    version: number
  
    // 文章标题
    @Column('text')
    title: string;

    // 文章描述
    @Column('text')
    description: string;

    // 文章内容
    @Column('text')
    content: string;
}