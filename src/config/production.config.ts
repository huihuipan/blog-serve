import { join } from "path";

export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    // 端口
    port: 3000,
    // 静态文件路径 localhost:3000/static/upload/xxx.jpg
    uploadStaticSrc: 'upload',
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    password: '888888',
    database: 'test',
    entities: ["dist/modules/**/*.entity{.ts,.js}"],
    synchronize: true,
    charset: 'utf8mb4',
    logging: true,
  },

  // JWT 配置
  JWT_CONFIG: {
    secret: 'asliudfnalsd', // 密钥
    signOptions: { 
      expiresIn: '24h', // token 过期时效
    }, 
  },
}
