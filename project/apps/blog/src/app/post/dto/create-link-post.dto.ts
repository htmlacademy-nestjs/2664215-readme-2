import { PostType } from '@project/types';

export class CreateLinkPostDto {
  public type!: PostType.Link;
  public tags?: string[];
  public linkUrl!: string;
  public description!: string;
}
