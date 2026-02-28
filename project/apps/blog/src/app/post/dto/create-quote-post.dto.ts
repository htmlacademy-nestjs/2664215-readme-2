import { PostType } from '@project/types';

export class CreateQuotePostDto {
  public type!: PostType.Quote;
  public tags?: string[];
  public quote!: string;
  public quoteAuthor!: string;
}
