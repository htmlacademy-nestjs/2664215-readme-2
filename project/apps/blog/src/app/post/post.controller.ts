import { Body, Controller, Post } from '@nestjs/common';

import { fillRdo } from '@project/helpers';

import type { CreatePostDto } from './dto/create-post.dto';
import { PostService } from './post.service';
import { PostRdo } from './rdo/post.rdo';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  public async create(@Body() dto: CreatePostDto) {
    const post = await this.postService.create(dto);
    return fillRdo(PostRdo, post.convertToObject());
  }
}
