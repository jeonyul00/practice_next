import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const query = context.query.q;
  if (!query) return;
  const searchBooks = await fetchBooks(query as string);
  return { props: { searchBooks } };
};

export default function Page({
  searchBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {searchBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
