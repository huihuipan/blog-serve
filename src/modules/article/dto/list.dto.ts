import { IsOptional, Matches } from "class-validator";
import { regPositiveOrEmpty } from "src/utils/regex.util";

export class ListDTO {
  @IsOptional()
  @Matches(regPositiveOrEmpty, { message: 'page 不可小于 0' })
  readonly page?: number;

  @IsOptional()
  @Matches(regPositiveOrEmpty, { message: 'pageSize 不可小于 0' })
  readonly pageSize?: number;
}