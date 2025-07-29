import React, { ReactNode } from "react";
import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";

function Home() {
  return (
    <div>
      <h1 className={style.h1}>index</h1>
      <div className={style.h2}>index</div>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

export default Home;
