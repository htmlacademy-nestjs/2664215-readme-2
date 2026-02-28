import { PostType } from '@project/types';

export class CreatePostDto {
  public type!: PostType;
  public tags?: string[];
  public linkUrl?: string;
  public description?: string;
  public quote?: string;
  public quoteAuthor?: string;
  public title?: string;
  public announce?: string;
  public text?: string;
  public photoUrl?: string;
  public videoUrl?: string;
}
