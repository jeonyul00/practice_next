import { useRouter } from "next/router";
import React from "react";

function Book() {
  const {
    query: { id },
  } = useRouter();
  return <div>Book: {id ?? "검색어를 입력해주세요"}</div>;
}

export default Book;
