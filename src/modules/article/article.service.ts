import { Injectable } from '@nestjs/common';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleEditDTO } from './dto/article-edit.dto';
import { IdDTO } from './dto/id.dto';
import { ListDTO } from './dto/list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entity/article.entity';

@Injectable()
export class ArticleService {
  list: any[];
  
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {
    this.list = []
  }

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
      .getMany()

    const list = await getList
    return list
  }

  async getOne(
    idDto: IdDTO  
  ) {
    const { id } = idDto
		const articleDetial = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.id = :id', { id })
      .getOne()
		return articleDetial;
  }

  async create(
    articleCreateDTO: ArticleCreateDTO
  ):Promise<Article>{
    const article = new Article();
    article.title = articleCreateDTO.title
    article.description = articleCreateDTO.description
    article.content = articleCreateDTO.content
    const result = await this.articleRepository.save(article);
    return result
  }

  async update(
    articleEditDTO: ArticleEditDTO
  ): Promise<Article>{
    const { id } = articleEditDTO
    let articleToUpdate = await this.articleRepository.findOne({ id })
    articleToUpdate.title = articleEditDTO.title
    articleToUpdate.description = articleEditDTO.description
    articleToUpdate.content = articleEditDTO.content
    const result = await this.articleRepository.save(articleToUpdate)
    return result
  }
  
  async delete (
    idDTO: IdDTO,
  ) {
    const { id } = idDTO
    let articleToUpdate = await this.articleRepository.findOne({ id })
    articleToUpdate.isDelete = true
    const result = await this.articleRepository.save(articleToUpdate)
    return result
  }

}
