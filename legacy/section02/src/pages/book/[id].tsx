import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchOneBook from "@/lib/fetch-one-books";
import { useRouter } from "next/router";
import Head from "next/head";

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
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>서비스 제목~</title>
          <meta property="og:image" content="/section02/public/thumbnail.png" />
          <meta property="og:title" content="제목제목" />
          <meta property="og:description" content="설명설명" />
        </Head>
        <div>로딩 중입니다...</div>;
      </>
    );
  }
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content="/section02/public/thumbnail.png" />
        <meta property="og:title" content="한 입 북스" />
        <meta property="og:description" content={description} />
      </Head>
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
    </>
  );
}
