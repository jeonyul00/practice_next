import React from "react";
import { useRouter } from "next/router";

function Search() {
  const {
    query: { q },
  } = useRouter();

  return <div>Search: {q ?? "검색어 없음"}</div>;
}

export default Search;
