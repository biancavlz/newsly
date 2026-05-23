import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

type ArchiveYearsProps = {
  params: Promise<{
    filter: string;
  }>;
};

type FilteredNewsProps = {
  selectedYear: string;
  selectedMonth: string;
};

function FilteredNews({ selectedYear, selectedMonth }: FilteredNewsProps) {
  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }
  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

async function FilterHeader({
  selectedYear,
  selectedMonth,
}: FilteredNewsProps) {
  const availableYears = getAvailableNewsYears();
  let links = availableYears;

  const routeErrorCondition =
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth));

  if (routeErrorCondition) {
    throw new Error("Invalid filter");
  }

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function ArchiveYearPage({ params }: ArchiveYearsProps) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <FilterHeader
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
        />
      </Suspense>
    </>
  );
}

export default ArchiveYearPage;
