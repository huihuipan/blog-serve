# blog-serve
使用 nestjs 的简单博客系统

## 使用

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

## 开发记录

### 初始化项目

安装 nestjs 脚手架
```shell {.line-numbers}
npm i -g @nestjs/cli
```

初始化 nestjs 项目
```shell {.line-numbers}
nest new project-name
```

### 使用 Mysql + TypeORM 持久化数据
安装依赖
```shell {.line-numbers}
npm install --save @nestjs/typeorm typeorm mysql2
```