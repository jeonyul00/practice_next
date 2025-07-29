import Link from "next/link";
import React, { ReactNode } from "react";
import style from "./global-layout.module.css";

function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>📚 Home</Link>
      </header>
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>prod by yul</footer>
    </div>
  );
}

export default GlobalLayout;
