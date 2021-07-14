import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { IdDTO } from './dto/id.dto';
import { ListDTO } from './dto/list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entity/article.entity';
import { getPagination } from 'src/utils/index.util';

@Injectable()
export class ArticleService {  
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  /**
   * 
   * @param listDTO 
   * @returns 
   */
  async getMore(
    listDTO: ListDTO,
  ) {
		const { page = 1, pageSize = 10 } = listDTO
    const getList = this.articleRepository
      .createQueryBuilder('article')
      .where({ isDelete: false })
      .select([
        'article.id',
        'article.title', 
        'article.description',
        'article.createTime',
        'article.updateTime',
      ])
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount()

    const [list, total] = await getList
    const pagination = getPagination(total, page, pageSize)

    return {
      list,
      pagination,
    }
  }

  /**
   * 
   * @param idDto 
   * @returns 
   */
  async getOne(
    idDto: IdDTO  
  ) {
    const { id } = idDto
		const articleDetial = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id })
      .getOne()

    if (!articleDetial) {
      throw new NotFoundException('找不到文章')
    }

		return {
      info: articleDetial
    }
  }

  /**
   * 
   * @param articleCreateDTO 
   * @returns 
   */
  async create(
    articleCreateDTO: ArticleCreateDTO
  ){
    const article = new Article();
    article.title = articleCreateDTO.title
    article.description = articleCreateDTO.description
    article.content = articleCreateDTO.content
    const result = await this.articleRepository.save(article);
    
    return {
      info: result
    }
  }

  /**
   * 
   * @param articleEditDTO 
   * @returns 
   */
  async update(
    articleEditDTO: ArticleEditDTO
  ) {
    const { id } = articleEditDTO
    let articleToUpdate = await this.articleRepository.findOne({ id })

    for (let key in articleEditDTO) {
      if (key !== 'id') {
        articleToUpdate[key] = articleEditDTO[key]
      }
    }

    const result = await this.articleRepository.save(articleToUpdate)

    return {
      info: result,
    }
  }
  
  /**
   * 
   * @param idDTO 
   * @returns 
   */
  async delete (
    idDTO: IdDTO,
  ) {
    const { id } = idDTO
    let articleToUpdate = await this.articleRepository.findOne({ id })
    articleToUpdate.isDelete = true
    const result = await this.articleRepository.save(articleToUpdate)
    
    return {
      info: result
    }
  }

}
