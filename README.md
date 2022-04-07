# blog-serve
使用 nestjs 的简单博客系统

## 使用

0. 全局安装 nest-cli
```shell {.line-numbers}
yarn add global @nestjs/cli
```

1. 克隆本项目
```shell {.line-numbers}
git clone git@github.com:huihuipan/blog-serve.git
```
2. 安装依赖
```shell {.line-numbers}
yarn install
```
3. 开发运行
```shell {.line-numbers}
npm run start:dev
```
4. 打包发布
```shell {.line-numbers}
npm run build
npm run start
```

## 更新
```
nest update --force
```

## 环境变量
环境变量在存储在 .env 文件中，需要 package.json 文件的启动命令 的 NODE_ENV 和 env 文件后缀一样，如 NODE_ENV=dev，那么对应的 env 文件就是 .env.dev，env 文件包含大量隐私信息，请妥善保管，不要存放在 git 仓库，具体配置参考 .env.local 文件