import { NewsItem } from "@/app/(content)/types/news";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

type ImagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function ImagePage({ params }: ImagePageProps) {
  const { slug } = await params;
  const newsItem = (await getNewsItem(slug)) as NewsItem | null;

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default ImagePage;
