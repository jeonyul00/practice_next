import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useCallback, useEffect, useState } from "react";
import BookItem from "@/components/book-item";
import fetchBooks from "@/lib/fetch-books";
import { BookData } from "@/types";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const q = router.query.q;
  const [books, setBooks] = useState<BookData[]>([]);

  const fetchResult = useCallback(async () => {
    const data = await fetchBooks(q as string);
    setBooks(data);
  }, [q]);

  useEffect(() => {
    fetchResult();
  }, [q, fetchResult]);

  return (
    <div>
      {books.map((book: BookData) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
