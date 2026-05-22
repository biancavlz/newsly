import { NewsItem } from "@/app/(content)/types/news";
import sql from "better-sqlite3";

const db = sql("data.db");

export function getAllNews(): NewsItem[] {
  const news = db.prepare("SELECT * FROM news").all() as NewsItem[];
  return news;
}

export function getNewsItem(slug: string): NewsItem | undefined {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug) as
    | NewsItem
    | undefined;

  // For testing loading
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return newsItem;
}

export function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as NewsItem[];
  return latestNews;
}

export function getAvailableNewsYears() {
  const years = (
    db
      .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
      .all() as { year: string }[]
  ).map((year) => year.year);

  return years;
}

export function getAvailableNewsMonths(year: string) {
  return (
    db
      .prepare(
        "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?",
      )
      .all(year) as { month: string }[]
  ).map((month) => month.month);
}

export function getNewsForYear(year: string): NewsItem[] {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC",
    )
    .all(year) as NewsItem[];

  return news;
}

export function getNewsForYearAndMonth(
  year: string,
  month: string,
): NewsItem[] {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC",
    )
    .all(year, month) as NewsItem[];

  return news;
}
