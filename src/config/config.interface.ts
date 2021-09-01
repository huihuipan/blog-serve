interface Config {
  // 服务基本配置
  SERVICE_CONFIG: {
    // 端口
    port: number,
    // 静态文件路径 localhost:3000/static/upload/xxx.jpg
    uploadStaticSrc: string,
  },

  // swagger 配置
  SWAGGER_CONFIG: {
    enableSwagger: boolean,
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: string,
    host: string,
    port: number,
    username: string,
    password: string,
    database: string,
    entities: string[],
    synchronize: boolean,
    charset: string,
    logging: boolean,
  },

  // JWT 配置
  JWT_CONFIG: {
    secret: string,
    signOptions: { 
      expiresIn: string, // token 过期时效
    }, 
  },
}
