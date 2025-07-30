import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-books";
import { useRouter } from "next/router";

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;

  // fallback 환경에서는 id가 없을 수 있으므로 방어
  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const book = await fetchOneBook(Number(id));

  if (!book || book.statusCode === 404) {
    return {
      notFound: true,
    };
  }

  return { props: { book } };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  // fallback 로딩 중일 때만 로딩 표시
  if (router.isFallback) {
    return <div>로딩 중입니다...</div>;
  }

  // 여기서부터는 반드시 book이 존재한다고 보장됨
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{id}</div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
