import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

type NewsItem = {
  id: string;
  slug?: string;
  title: string;
  image?: string;
  date: string;
  content?: string;
};

async function NewsPage() {
  const news: NewsItem[] = getAllNews() as NewsItem[];

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
