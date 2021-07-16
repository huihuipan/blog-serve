import { Controller, Body, Query, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { IdDTO } from './dto/id.dto';
import { ListDTO } from './dto/list.dto';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { ArticleInfoData, ArticleInfoResponse } from './response/article-info.response';
import { ArticleListResponse, ArticleListData } from './response/article-list.response';

@ApiTags('文章模块')
@Controller('article')
export class ArticleController {
  constructor(
    private articleService: ArticleService
  ) {}

  @Get('list')
  @ApiOkResponse({ description: '文章列表', type: ArticleListResponse })
  async getMore(
    @Query() listDTO: ListDTO,
  ): Promise<ArticleListData> {
    return await this.articleService.getMore(listDTO)
  }

  @Get('info')
  @ApiOkResponse({ description: '文章详情', type: ArticleInfoResponse })
  async getOne(
    @Query() idDto: IdDTO
  ): Promise<ArticleInfoData>{
    return await this.articleService.getOne(idDto)
  }

  @Post('create')
  @ApiOkResponse({ description: '创建文章', type: ArticleInfoResponse })
  async create(
    @Body() articleCreateDTO: ArticleCreateDTO
  ): Promise<ArticleInfoData> {
    return await this.articleService.create(articleCreateDTO)
  }

  @Post('edit')
  @ApiOkResponse({ description: '编辑文章', type: ArticleInfoResponse })
  async update(
    @Body() articleEditDTO: ArticleEditDTO
  ): Promise<ArticleInfoData> {
    return await this.articleService.update(articleEditDTO)
  }

  @Post('delete')
  @ApiOkResponse({ description: '删除文章', type: ArticleInfoResponse })
  async delete(
    @Body() idDto: IdDTO,
  ): Promise<ArticleInfoData> {
    return await this.articleService.delete(idDto)
  }
}
