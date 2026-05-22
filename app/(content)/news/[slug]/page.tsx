import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsItem } from "../../types/news";

type NewsDetailsProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function NewsDetailsPage({ params }: NewsDetailsProps) {
  const { slug } = await params;
  const newsItem = (await getNewsItem(slug)) as NewsItem | null;

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsDetailsPage;
