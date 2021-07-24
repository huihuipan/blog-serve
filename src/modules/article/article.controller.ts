import { Controller, Body, Query, Get, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { ArticleInfoVO, ArticleInfoSuccessVO } from './vo/article-info.vo';
import { ArticleListSuccessVO, ArticleListVO } from './vo/article-list.vo';
import { AuthGuard } from '@nestjs/passport';
import { PageDTO } from 'src/common/dto/page.dto';
import { IdDTO } from 'src/common/dto/id.dto';

@ApiTags('文章模块')
@Controller('article')
export class ArticleController {
  constructor(
    private articleService: ArticleService
  ) {}

  @ApiOkResponse({ description: '文章列表', type: ArticleListSuccessVO })
  @Get('list')
  async getMore(
    @Query() pageDTO: PageDTO,
  ): Promise<ArticleListVO> {
    return await this.articleService.getMore(pageDTO)
  }

  @ApiOkResponse({ description: '文章详情', type: ArticleInfoSuccessVO })
  @Get('info')
  async getOne(
    @Query() idDto: IdDTO
  ): Promise<ArticleInfoVO>{
    return await this.articleService.getOne(idDto)
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '创建文章', type: ArticleInfoSuccessVO })
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(
    @Body() articleCreateDTO: ArticleCreateDTO
  ): Promise<ArticleInfoVO> {
    return await this.articleService.create(articleCreateDTO)
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '编辑文章', type: ArticleInfoSuccessVO })
  @UseGuards(AuthGuard('jwt'))
  @Post('edit')
  async update(
    @Body() articleEditDTO: ArticleEditDTO
  ): Promise<ArticleInfoVO> {
    return await this.articleService.update(articleEditDTO)
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '删除文章', type: ArticleInfoSuccessVO })
  @UseGuards(AuthGuard('jwt'))
  @Post('delete')
  async delete(
    @Body() idDto: IdDTO,
  ): Promise<ArticleInfoVO> {
    return await this.articleService.delete(idDto)
  }
}
