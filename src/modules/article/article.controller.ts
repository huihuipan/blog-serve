import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './interface/article.interace';

@Controller('article')
export class ArticleController {
  constructor(
    private articleService: ArticleService
  ) {}

  @Get('list')
  getMore() {
    return this.articleService.getMore()
  }

  @Get('info')
  getOne(
    @Query() id:string
  ) {
    return this.articleService.getOne({ id })
  }

  @Post('create')
  create(
    @Body() article: Article
  ) {
    return this.articleService.create(article)
  }

  @Post('edit')
  update(
    @Body() article: Article
  ) {
    return this.articleService.update(article)
  }

  @Post('remove')
  delete(
    @Body() id: number
  ) {
    return this.articleService.delete({ id })
  }
}
