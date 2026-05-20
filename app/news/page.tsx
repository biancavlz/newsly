import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <Link href={"/news/abc"}>Details news page</Link>
      </ul>
    </>
  );
}

export default NewsPage;
