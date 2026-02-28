import { Injectable } from '@nestjs/common';

import type { CreatePostDto } from './dto/create-post.dto';
import { PostRepository } from './post.repository';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  public async create(dto: CreatePostDto): Promise<PostEntity> {
    const postEntity = new PostEntity(dto);
    return this.postRepository.save(postEntity);
  }
}
