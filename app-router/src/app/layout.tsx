import "./globals.css";
import Link from "next/link";
import style from "./layout.module.css";
import { BookData } from "@/types";

async function Footer() {
  const response = await fetch(`${process.env.PUBLIC_API_SERVER_URL}/book`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    return <footer>제작 율</footer>;
  }
  const books: BookData[] = await response.json();
  const bookCount = books.length;
  return (
    <footer>
      <div>prod yul</div>
      <div>total : {bookCount}</div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header>
            <Link href={"/"}>📚 ONEBITE BOOKS</Link>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
