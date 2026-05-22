import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

function LatestDefaultPage() {
  const latestNew = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNew} />
    </>
  );
}

export default LatestDefaultPage;
