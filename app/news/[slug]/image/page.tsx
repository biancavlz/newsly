import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

type ImagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function ImagePage({ params }: ImagePageProps) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

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
