import { Controller, Get, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PageDTO } from 'src/common/dto/Page.dto';
import { PictureService } from './picture.service';
import { PictureInfoSuccessVO, PictureInfoVO } from './vo/picture-info.vo';
import { PictureListSuccessVO, PictureListVO } from './vo/picture-list.vo';

@ApiTags('图床模块')
@Controller('picture')
export class PictureController {
  constructor(
    private pictureService: PictureService
  ) {}

  @ApiOkResponse({ description: '图片列表', type: PictureListSuccessVO })
  @Get('list')
  async getMany(
    @Query() pageDto: PageDTO
  ): Promise<PictureListVO> {
    return await this.pictureService.getMany(pageDto)
  }

  @ApiOkResponse({ description: '上传图片', type: PictureInfoSuccessVO })
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile() file:any
  ): Promise<PictureInfoVO> {
    console.log('controller', {file})
    return await this.pictureService.upload(file)
  }
}
