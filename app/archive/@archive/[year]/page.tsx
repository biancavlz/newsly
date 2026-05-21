import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

type ArchiveYearsProps = {
  params: Promise<{
    year: string;
  }>;
};

async function ArchiveYearPage({ params }: ArchiveYearsProps) {
  const { year } = await params;

  const filteredNews = getNewsForYear(year);

  return <NewsList news={filteredNews} />;
}

export default ArchiveYearPage;
