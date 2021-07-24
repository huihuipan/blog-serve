import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { UserModule } from './modules/user/user.module';
import { typeOrmConfig } from './config/db/typeorm.config';
@Module({
  imports: [
    // 使用 TypeORM 配置数据库
    typeOrmConfig,
    ArticleModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
