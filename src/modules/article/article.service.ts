import { Injectable, NotFoundException } from '@nestjs/common';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entity/article.entity';
import { getPagination } from 'src/utils/index.util';
import { PageDTO } from 'src/common/dto/Page.dto';
import { IdDTO } from 'src/common/dto/id.dto';
import { ArticleListDTO } from './dto/article-list.dto';

@Injectable()
export class ArticleService {  
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async getMany(
    pageDTO: PageDTO,
  ) {
		const { page = 1, pageSize = 10 } = pageDTO
    const getList = this.articleRepository
      .createQueryBuilder('article')
      .where({ isDelete: false })
      .leftJoin("article.tags","tag")
      .select([
        'article.id',
        'article.title', 
        'article.description',
        'article.createTime',
        'article.updateTime',
      ])
      .addSelect([
        'tag.id',
        'tag.label'
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

  async getManyByTagId(
    articleListDto: ArticleListDTO
  ) {
		const { page = 1, pageSize = 10, tagId } = articleListDto
    const getList = this.articleRepository
      .createQueryBuilder('article')
      .where({ isDelete: 0 })
      .andWhere('tag.id = :id', { id: tagId })
      .andWhere('tag.isDelete = :isDelete', { isDelete: false })
      .leftJoin("article.tags","tag")
      .select([
        'article.id',
        'article.title', 
        'article.description',
        'article.createTime',
        'article.updateTime',
      ])
      .addSelect([
        'tag.id',
        'tag.label'
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

  async getOne(
    idDto: IdDTO
  ) {
    const { id } = idDto
		const articleDetial = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id })
      .leftJoin("article.tags","tag")
      .select([
        'article.id',
        'article.title', 
        'article.description',
        'article.createTime',
        'article.updateTime',
      ])
      .addSelect([
        'tag.id',
        'tag.label'
      ])
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
    const article = new Article()
    for (let key in articleCreateDTO) {
      article[key] = articleCreateDTO[key]
    }
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
  async remove (
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
