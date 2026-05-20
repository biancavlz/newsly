type NewsDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

async function NewsDetailsPage({ params }: NewsDetailsProps) {
  const { id } = await params;

  return (
    <>
      <h1>News details page</h1>
      <p>News ID: {id}</p>
    </>
  );
}

export default NewsDetailsPage;
