import { GetServerSidePropsContext } from "next";
import style from "./[id].module.css";
import fetchBook from "@/lib/fetch-book";
import { BookData } from "@/types";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const book = await fetchBook(Number(id));

  return { props: { book } };
};

export default function Page({ book }: { book: BookData }) {
  if (!book) return;
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
