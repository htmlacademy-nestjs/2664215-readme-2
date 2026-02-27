import { PostType } from './post-type.enum';

export interface Post {
  id?: string;
  type: PostType;
  tags?: string[];
}

export interface LinkPost extends Post {
  type: PostType.Link;
  linkUrl: string;
  description: string;
}

export interface QuotePost extends Post {
  type: PostType.Quote;
  quote: string;
  quoteAuthor: string;
}

export interface TextPost extends Post {
  type: PostType.Text;
  title: string;
  announce: string;
  text: string;
}

export interface PhotoPost extends Post {
  type: PostType.Photo;
  photoUrl: string;
}

export interface VideoPost extends Post {
  type: PostType.Video;
  title: string;
  videoUrl: string;
}

export type PostUnion = LinkPost | QuotePost | TextPost | PhotoPost | VideoPost;
