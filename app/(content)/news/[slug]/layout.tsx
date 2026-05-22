type NewsDetailsLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

function NewsDetailsLayout({ children, modal }: NewsDetailsLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default NewsDetailsLayout;
