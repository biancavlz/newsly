import { DUMMY_NEWS } from "@/dummy-news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears(): number[] {
  return DUMMY_NEWS.reduce<number[]>((years, news) => {
    const year = new Date(news.date).getFullYear();

    if (!years.includes(year)) {
      years.push(year);
    }

    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: string | number): number[] {
  return DUMMY_NEWS.reduce<number[]>((months, news) => {
    const newsYear = new Date(news.date).getFullYear();

    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();

      if (!months.includes(month + 1)) {
        months.push(month + 1);
      }
    }

    return months;
  }, []).sort((a, b) => b - a);
}

type NewsItem = {
  id: string;
  title: string;
  date: string;
  image?: string;
  content?: string;
};

export function getNewsForYear(year: string | number): NewsItem[] {
  return DUMMY_NEWS.filter(
    (news: NewsItem) => new Date(news.date).getFullYear() === +year,
  );
}

export function getNewsForYearAndMonth(
  year: string | number,
  month: string | number,
): NewsItem[] {
  return DUMMY_NEWS.filter((news: NewsItem) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;

    return newsYear === +year && newsMonth === +month;
  });
}
