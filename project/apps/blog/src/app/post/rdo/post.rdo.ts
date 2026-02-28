import { Expose } from 'class-transformer';
import { PostType } from '@project/types';

export class PostRdo {
  @Expose()
  public id!: string;

  @Expose()
  public type!: PostType;

  @Expose()
  public tags?: string[];

  @Expose()
  public linkUrl?: string;

  @Expose()
  public description?: string;

  @Expose()
  public quote?: string;

  @Expose()
  public quoteAuthor?: string;

  @Expose()
  public title?: string;

  @Expose()
  public announce?: string;

  @Expose()
  public text?: string;

  @Expose()
  public photoUrl?: string;

  @Expose()
  public videoUrl?: string;
}
