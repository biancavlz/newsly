import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

type InterceptedImagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function InterceptedImagePage({ params }: InterceptedImagePageProps) {
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

export default InterceptedImagePage;
