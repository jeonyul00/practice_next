import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

// Component: 현재 페이지 역할을 할 컴포넌트
// pageProps: Component에 필요한 프롭스
export default function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter();
  const onClick = () => {
    push("/test");
  };

  return (
    <>
      <header>
        <Link href={"/"}>index</Link>
        &nbsp;
        <Link href={"/search"}>search</Link>
        &nbsp;
        <Link href={"/book"}>book</Link>
        <div>
          <button onClick={onClick}>/test 이동</button>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}
