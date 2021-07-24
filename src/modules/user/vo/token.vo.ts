import { ApiProperty } from "@nestjs/swagger";
import { SuccessVO } from "src/common/dto/success.dto";

export class TokenItem {
  /**
   * token
   * @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsIm5pY2tuYW1lIjoi5pav5o-Q6Iqs5aSn54uXIiwibW9iaWxlIjoiMTMwNDkxNTM0NjYiLCJpYXQiOjE2MjY5MjQ0MDIsImV4cCI6MTYyNzAxMDgwMn0.-BHoF_9ZVNjydtkv-GPOmisn7RzT73V7hiEXf1vX7E0
   */
  token: string;
}

export class TokenVO {
  @ApiProperty({ type: TokenItem })
  info: TokenItem
}

export class TokenResponse extends SuccessVO{
  data: TokenVO
} 
