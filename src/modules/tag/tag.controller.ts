/**
 * 标签模块
 */

import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IdDTO } from 'src/common/dto/id.dto';
import { TagCreateDTO } from './dto/tag-create.dto';
import { TagUpdateDTO } from './dto/tag-update.dto';
import { TagService } from './tag.service';
import { TagInfoSuccessVO, TagInfoVO } from './vo/tag-info.vo';
import { TagListSuccessVO, TagListVO } from './vo/tag-list.vo';

@Controller('tag')
export class TagController {
  constructor(
    private tagService: TagService
  ) {}
  
  @Get('list')
  getMany(): Promise<TagListVO> {
    return this.tagService.getMany()
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(
    @Body() tagCreateDto: TagCreateDTO
  ): Promise<TagInfoVO> {
    return this.tagService.create(tagCreateDto)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  update(
    @Body() tagUpdateDto: TagUpdateDTO
  ): Promise<TagInfoVO> {
    return this.tagService.update(tagUpdateDto)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('remove')
  remove(
    @Body() idDto: IdDTO
  ): Promise<TagInfoVO> {
    return this.tagService.remove(idDto)
  }
}
