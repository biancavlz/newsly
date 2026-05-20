import { DUMMY_NEWS } from "@/dummy-news";

type NewsDetailsProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function NewsDetailsPage({ params }: NewsDetailsProps) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}

export default NewsDetailsPage;
