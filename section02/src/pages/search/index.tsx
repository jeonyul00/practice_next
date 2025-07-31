import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useCallback, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Page() {
  const [searchBooks, setSearchBooks] = useState<BookData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = useCallback(async () => {
    const data = await fetchBooks(q as string);
    setSearchBooks(data);
  }, [q]);

  useEffect(() => {
    fetchSearchResult();
  }, [q, fetchSearchResult]);

  return (
    <div>
      <Head>
        <title>검색 결과</title>
        <meta property="og:image" content="/section02/public/thumbnail.png" />
        <meta property="og:title" content="한 입 북스" />
      </Head>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
