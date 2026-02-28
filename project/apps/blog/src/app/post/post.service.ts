import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PostType } from '@project/types';

import { PostRepository } from './post.repository';
import { PostEntity } from './post.entity';
import { POST_EXISTS, POST_NOT_FOUND } from './post.constant';
import type { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  public async create(dto: CreatePostDto): Promise<PostEntity> {
    switch (dto.type) {
      case PostType.Link: {
        const post = await this.postRepository.findByLinkUrl(dto.linkUrl);
        if (post) {
          throw new ConflictException(POST_EXISTS);
        }
        break;
      }
      case PostType.Quote: {
        const post = await this.postRepository.findByQuote(
          dto.quote,
          dto.quoteAuthor,
        );
        if (post) {
          throw new ConflictException(POST_EXISTS);
        }
        break;
      }
      case PostType.Photo: {
        const post = await this.postRepository.findByPhotoUrl(dto.photoUrl);
        if (post) {
          throw new ConflictException(POST_EXISTS);
        }
        break;
      }
      case PostType.Text: {
        const post = await this.postRepository.findByTitleAndText(
          dto.title,
          dto.text,
        );
        if (post) {
          throw new ConflictException(POST_EXISTS);
        }
        break;
      }
      case PostType.Video: {
        const post = await this.postRepository.findByVideoUrl(dto.videoUrl);
        if (post) {
          throw new ConflictException(POST_EXISTS);
        }
        break;
      }
    }

    const postEntity = new PostEntity(dto);
    return this.postRepository.save(postEntity);
  }

  public async getAll(): Promise<PostEntity[]> {
    return this.postRepository.findAll();
  }

  public async getById(id: string): Promise<PostEntity> {
    const post = await this.postRepository.findById(id);
    if (!post) {
      throw new NotFoundException(POST_NOT_FOUND);
    }
    return post;
  }
}
