import { Controller, Body, Query, Get, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { ApiTags, ApiOkResponse, ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { ArticleInfoVO, ArticleInfoSuccessVO } from './vo/article-info.vo';
import { ArticleListSuccessVO, ArticleListVO } from './vo/article-list.vo';
import { AuthGuard } from '@nestjs/passport';
import { IdDTO } from 'src/common/dto/id.dto';
import { ArticleListDTO } from './dto/article-list.dto';

@ApiTags('文章模块')
@Controller('article')
export class ArticleController {
  constructor(
    private articleService: ArticleService
  ) {}

  @ApiOkResponse({ description: '文章列表', type: ArticleListSuccessVO })
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
  @Post('update')
  async update(
    @Body() articleEditDTO: ArticleEditDTO
  ): Promise<ArticleInfoVO> {
    return await this.articleService.update(articleEditDTO)
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '删除文章', type: ArticleInfoSuccessVO })
  @UseGuards(AuthGuard('jwt'))
  @Post('remove')
  async remove(
    @Body() idDto: IdDTO,
  ): Promise<ArticleInfoVO> {
    return await this.articleService.remove(idDto)
  }
}
