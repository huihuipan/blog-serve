import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 使用验证管道
  app.useGlobalPipes(new ValidationPipe())
  // 使用拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  // 使用异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter())

  // 静态文件路径
  app.useStaticAssets(join(__dirname, '..', process.env.SERVE_UPLOAD_FOLDER), {
    prefix: `/${process.env.SERVE_UPLOAD_FOLDER}`
  })

  // 监听端口
  await app.listen(process.env.SERVE_PORT);
}
bootstrap();
