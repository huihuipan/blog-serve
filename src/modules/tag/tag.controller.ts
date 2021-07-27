import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { IdDTO } from 'src/common/dto/id.dto';
import { TagCreateDTO } from './dto/tag-create.dto';
import { TagUpdateDTO } from './dto/tag-update.dto';
import { TagService } from './tag.service';
import { TagInfoSuccessVO, TagInfoVO } from './vo/tag-info.vo';
import { TagListSuccessVO, TagListVO } from './vo/tag-list.vo';

@ApiTags('标签模块')
@Controller('tag')
export class TagController {
  constructor(
    private tagService: TagService
  ) {}
  
  @ApiOkResponse({ description: '标签列表', type: TagListSuccessVO })
  @Get('list')
  getMany(): Promise<TagListVO> {
    return this.tagService.getMany()
  }
  
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '创建标签', type: TagInfoSuccessVO })
  @UseGuards(AuthGuard('jwt'))
  @Post('create')
  create(
    @Body() tagCreateDto: TagCreateDTO
  ): Promise<TagInfoVO> {
    return this.tagService.create(tagCreateDto)
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '编辑标签', type: TagInfoSuccessVO })
  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  update(
    @Body() tagUpdateDto: TagUpdateDTO
  ): Promise<TagInfoVO> {
    return this.tagService.update(tagUpdateDto)
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ description: '删除标签', type: TagInfoSuccessVO })
  @UseGuards(AuthGuard('jwt'))
  @Post('remove')
  remove(
    @Body() idDto: IdDTO
  ): Promise<TagInfoVO> {
    return this.tagService.remove(idDto)
  }
}
