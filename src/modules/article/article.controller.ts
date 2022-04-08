/**
 * 文章模块
 */

import { Controller, Body, Query, Get, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { ArticleInfoVO, ArticleInfoSuccessVO } from './vo/article-info.vo';
import { ArticleListSuccessVO, ArticleListVO } from './vo/article-list.vo';
import { AuthGuard } from '@nestjs/passport';
import { IdDTO } from '@/common/dto/id.dto';
import { ArticleListDTO } from './dto/article-list.dto';

@Controller('article')
export class ArticleController {
  constructor(
    private articleService: ArticleService
  ) {}

  @Get('list')
  async getMany(
    @Query() articleListDto: ArticleListDTO,
  ): Promise<ArticleListVO> {
    const { tagId } = articleListDto
    if (tagId) {
      return await this.articleService.getManyByTagId(articleListDto)
    }
    return await this.articleService.getMany(articleListDto)
  }

  @Get('info')
  async getOne(
    @Query() idDto: IdDTO
  ): Promise<ArticleInfoVO>{
    return await this.articleService.getOne(idDto)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  async create(
    @Body() articleCreateDTO: ArticleCreateDTO
  ): Promise<ArticleInfoVO> {
    return await this.articleService.create(articleCreateDTO)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  async update(
    @Body() articleEditDTO: ArticleEditDTO
  ): Promise<ArticleInfoVO> {
    return await this.articleService.update(articleEditDTO)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('remove')
  async remove(
    @Body() idDto: IdDTO,
  ): Promise<ArticleInfoVO> {
    return await this.articleService.remove(idDto)
  }
}
