import { TagDTO } from "../dto/tag.dto";

export class TagListVO {
  list: TagDTO[]
}

export class TagListSuccessVO {
  data: TagListVO
}