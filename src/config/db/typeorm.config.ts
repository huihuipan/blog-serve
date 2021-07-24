import { TypeOrmModule } from "@nestjs/typeorm";

export const typeOrmConfig = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '888888',
  database: 'test',
  entities: ["dist/modules/**/*.entity{.ts,.js}"],
  synchronize: true,
})