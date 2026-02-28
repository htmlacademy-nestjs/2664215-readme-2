import { PostType } from '@project/types';

export class CreateTextPostDto {
  public type!: PostType.Text;
  public tags?: string[];
  public title!: string;
  public announce!: string;
  public text!: string;
}
