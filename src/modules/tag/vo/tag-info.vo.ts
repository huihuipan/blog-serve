import { TagDTO } from "../dto/tag.dto";

export class TagInfoVO {
  info: TagDTO
}

export class TagInfoSuccessVO {
  data: {
    info: TagDTO
  }
}