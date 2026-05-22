import { NewsItem } from "@/app/(content)/types/news";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

type InterceptedImagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function InterceptedImagePage({ params }: InterceptedImagePageProps) {
  const { slug } = await params;
  const newsItem = getNewsItem(slug) as NewsItem | null;

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width="100%"
          />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;
