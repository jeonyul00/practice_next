import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";

const FetchBooks = async () => {
  // TODO: 에러처리
  const response = (
    await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`, {
      cache: "force-cache",
    })
  ).json();
  return (
    <div>
      {response.then((value) =>
        value.map((v: BookData) => <BookItem key={v.id} {...v} />)
      )}
    </div>
  );
};
const RecoBooks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );

  if (!response.ok) return;
  const recoBooks = await response.json();

  return (
    <div>
      {recoBooks.map((v: BookData) => (
        <BookItem key={v.id} {...v} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <FetchBooks />
      </section>
    </div>
  );
}
