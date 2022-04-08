/**
 * 图床模块
 */

import { Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PageDTO } from '@/common/dto/page.dto';
import { PictureService } from './picture.service';
import { PictureInfoSuccessVO, PictureInfoVO } from './vo/picture-info.vo';
import { PictureListSuccessVO, PictureListVO } from './vo/picture-list.vo';

@Controller('picture')
export class PictureController {
  constructor(
    private pictureService: PictureService
  ) {}

  @Get('list')
  async getMany(
    @Query() pageDto: PageDTO
  ): Promise<PictureListVO> {
    return await this.pictureService.getMany(pageDto)
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file:any
  ): Promise<PictureInfoVO> {
    console.log('controller', {file})
    return await this.pictureService.upload(file)
  }
}
