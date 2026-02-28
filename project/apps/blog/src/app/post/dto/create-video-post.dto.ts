import { PostType } from '@project/types';

export class CreateVideoPostDto {
  public type!: PostType.Video;
  public tags?: string[];
  public title!: string;
  public videoUrl!: string;
}
