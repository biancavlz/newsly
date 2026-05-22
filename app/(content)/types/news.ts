export type NewsItem = {
  id: string;
  slug: string;
  image: string;
  title: string;
  date: string;
  content: string;
};

export type NewsListProps = {
  news: NewsItem[];
};
