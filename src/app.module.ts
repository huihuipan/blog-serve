import { Module } from '@nestjs/common';
import { ArticleModule } from './modules/article/article.module';
import { UserModule } from './modules/user/user.module';
import { TagModule } from './modules/tag/tag.module';
import { PictureModule } from './modules/picture/picture.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Article } from './modules/article/entity/article.entity';
import { Picture } from './modules/picture/entity/picture.entity';
import { Tag } from './modules/tag/entity/tag.entity';
import { User } from './modules/user/entity/user.entity';

@Module({
  imports: [
    // 环境变量配置
    ConfigModule.forRoot({
      isGlobal: true,     // 全局模块
      envFilePath: `.env.${process.env.NODE_ENV}`, // .env 文件路径
    }),

    // 使用 TypeORM 配置数据库
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      // entities: ["dist/modules/**/*.entity{.ts,.js}"],
      entities: [Article, Picture, Tag, User],
      synchronize: true,
      charset: 'utf8mb4',
      logging: false,
    }),

    ArticleModule,
    UserModule,
    TagModule,
    PictureModule,
  ],
})
export class AppModule {}
