import { 
  Controller, 
  Body, 
  Query,
  Get, 
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { IdDTO } from './dto/id.dto';
import { ListDTO } from './dto/list.dto';

@Controller('article')
export class ArticleController {
  constructor(
    private articleService: ArticleService
  ) {}

  @Get('list')
  getMore(
    @Query() listDTO: ListDTO,
  ) {
    return this.articleService.getMore(listDTO)
  }

  @Get('info')
  getOne(
    @Query() idDto: IdDTO
  ) {
    return this.articleService.getOne(idDto)
  }

  @Post('create')
  create(
    @Body() articleCreateDTO: ArticleCreateDTO
  ) {
    return this.articleService.create(articleCreateDTO)
  }

  @Post('edit')
  update(
    @Body() articleEditDTO: ArticleEditDTO
  ) {
    return this.articleService.update(articleEditDTO)
  }

  @Post('delete')
  delete(
    @Body() idDto: IdDTO,
  ) {
    return this.articleService.delete(idDto)
  }
}
