import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import { NewsItem } from "../types/news";

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
