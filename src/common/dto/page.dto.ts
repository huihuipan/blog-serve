import { OmitType } from "@nestjs/swagger";
import { PaginationDTO } from "./pagination.dto";

export class PageDTO extends OmitType(PaginationDTO, ['pages', 'total'] as const) {}
