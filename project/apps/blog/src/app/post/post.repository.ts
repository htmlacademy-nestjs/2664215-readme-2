import { Injectable } from '@nestjs/common';

import { BaseMemoryRepository } from '@project/core';

import { PostEntity } from './post.entity';

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostEntity> {}
