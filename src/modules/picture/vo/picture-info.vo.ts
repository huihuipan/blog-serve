import { SuccessVO } from "@/common/dto/success.dto";
import { PictureDTO } from "../dto/picture.dto";

export class PictureInfoItem extends PictureDTO{}

export class PictureInfoVO {
  info: PictureInfoItem
}

export class PictureInfoSuccessVO extends SuccessVO {
  data: {
    info: PictureInfoItem
  }
} 