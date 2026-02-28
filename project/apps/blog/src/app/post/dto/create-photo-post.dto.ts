import { PostType } from '@project/types';

export class CreatePhotoPostDto {
  public type!: PostType.Photo;
  public tags?: string[];
  public photoUrl!: string;
}
