import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDTO } from 'src/common/dto/Page.dto';
import { getPagination } from 'src/utils/index.util';
import { Repository } from 'typeorm';
import { PictureCreateDto } from './dto/picture-create';
import { Picture } from './entity/picture.entity';
import { PictureInfoVO } from './vo/picture-info.vo';
import * as fs from 'fs';
import { encryptFileMD5 } from 'src/utils/cryptogram.util';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PictureService {
  constructor(
    @InjectRepository(Picture)
    private readonly pictureRepository: Repository<Picture>,

    private readonly configService: ConfigService,
  ) {}

  async getMany(
    pageDto: PageDTO
  ) {
    const { page, pageSize } = pageDto
    const getList = this.pictureRepository
      .createQueryBuilder('picture')
      .select([
        'picture.src',
      ])
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount()

    const [list, total] = await getList
    const pagination = getPagination(total, pageSize, page)

    return {
      list,
      pagination,
    }
  }

  async create(
    pictureCreateDTO: PictureCreateDto
  ): Promise<PictureInfoVO> {
    const picture = new Picture()
    picture.src = pictureCreateDTO.src
    picture.sign = pictureCreateDTO.sign
    const result = await this.pictureRepository.save(picture)
    return {
      info: result
    }
  }

  async getOneBySign(sign: string) {
    return await this.pictureRepository
      .createQueryBuilder('picture')
      .where('picture.sign = :sign', { sign })
      .getOne()
  }

  async upload(file: any) {
    const { buffer } = file

    const currentSign = encryptFileMD5(buffer)
    const hasPicture = await this.getOneBySign(currentSign)

    if (hasPicture) {
      return {
        info: {
          src: hasPicture.src,
          isHas: true,
        }
      }
    }

    const arr = file.originalname.split('.')
    const fileType = arr[arr.length - 1]
    const fileName = currentSign + '.' + fileType
    
    fs.writeFileSync(`${this.configService.get('SERVICE_CONFIG').uploadStaticSrc}/${fileName}`, buffer)

    const src = `${this.configService.get('SERVICE_CONFIG').uploadStaticSrc}/${fileName}`

    this.create({ src, sign: currentSign })

    return {
      info: {
        src,
        isHas: false
      }
    }
  }

}
