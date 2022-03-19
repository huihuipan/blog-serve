import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject: [ConfigService],  // 注入 ConfigService
      useFactory: () => ({
        secret: process.env.JWT_SECRET, // 密钥
        signOptions: { 
          expiresIn: process.env.JWT_EXPIRES_IN, // token 过期时效
        },
      }), // 获取配置信息
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy]
})
export class UserModule {}
