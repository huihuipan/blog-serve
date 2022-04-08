import { IdDTO } from "@/common/dto/id.dto";
import { TagDTO } from "./tag.dto";

export class TagUpdateDTO implements IdDTO,TagDTO {
  id: number;
  label: string;
}