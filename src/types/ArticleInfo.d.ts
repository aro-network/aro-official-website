declare namespace ArticleInfo {
  interface Author {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: {
      "24": string;
      "48": string;
      "96": string;
    };
    _links: {
      self: { href: string }[];
      collection: { href: string }[];
    };
  }

  interface FeaturedMedia {
    id: number;
    date: string;
    slug: string;
    type: string;
    link: string;
    title: { rendered: string };
    author: number;
    caption: { rendered: string };
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: {
      width: number;
      height: number;
      file: string;
      filesize: number;
      sizes: {
        medium: {
          file: string;
          width: number;
          height: number;
          filesize: number;
          mime_type: string;
          source_url: string;
        };
        thumbnail: {
          file: string;
          width: number;
          height: number;
          filesize: number;
          mime_type: string;
          source_url: string;
        };
      };
    };
    source_url: string;
    _links: {
      self: { href: string }[];
      collection: { href: string }[];
      about: { href: string }[];
      author: { embeddable: boolean; href: string }[];
      replies: { embeddable: boolean; href: string }[];
    };
  }

  interface Term {
    id: number;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    _links: {
      self: { href: string }[];
      collection: { href: string }[];
      about: { href: string }[];
      "wp:post_type": { href: string }[];
      curies: { name: string; href: string; templated: boolean }[];
    };
  }

  interface Post {
    id: number;
    date: Date;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    name?: string;
    names?: string;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
      footnotes: string;
    };
    categories: number[];
    tags: number[];
    _links: {
      self: { href: string }[];
      collection: { href: string }[];
      about: { href: string }[];
      author: { embeddable: boolean; href: string }[];
      replies: { embeddable: boolean; href: string }[];
      "version-history": { count: number; href: string }[];
      "predecessor-version": { id: number; href: string }[];
      "wp:featuredmedia": { embeddable: boolean; href: string }[];
      "wp:attachment": { href: string }[];
      "wp:term": { taxonomy: string; embeddable: boolean; href: string }[][];
      curies: { name: string; href: string; templated: boolean }[];
    };
    _embedded: {
      author: Author[];
      "wp:featuredmedia": FeaturedMedia[];
      "wp:term": Term[][];
    };
    imageUrl: string;
  }

  interface Category {
    id: number;
    count?: number;
    description?: string;
    link?: string;
    name?: string;
    slug: string;
    taxonomy?: string;
    parent?: number;
    meta?: [];
    _links?: {
      self: { href: string }[];
      collection: { href: string }[];
      about: { href: string }[];
      "wp:post_type": { href: string }[];
      curies: { name: string; href: string; templated: boolean }[];
    };
  }
}
