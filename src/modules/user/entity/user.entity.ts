import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class User {
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

  // 昵称
  @Column('text')
  nickname: string;

  // 手机号
  @Column('text')
  mobile: string;

  // 加密后的密码
  @Column('text', { select: false })
  password: string;

  // 加密盐
  @Column('text', { select: false })
  salt: string;

}