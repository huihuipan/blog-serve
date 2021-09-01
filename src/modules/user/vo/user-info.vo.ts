import { SuccessVO } from "src/common/dto/success.dto";

export class UserInfoItem {
  /**
   * 用户id
   * @example 1
   */
  id: number;

  /**
   * 创建时间
   * @example 2021-01-1 00:00:00
   */
  createTime: Date

  /**
   * 更新时间
   * @example 2021-01-1 00:00:00
   */
  updateTime: Date

  /**
   * 手机号
   * @example 13088888888
   */
  mobile: string;
}

export class UserInfoVO {
  info: UserInfoItem
}

export class UserInfoSuccessVO extends SuccessVO {
  data: UserInfoVO
} 
