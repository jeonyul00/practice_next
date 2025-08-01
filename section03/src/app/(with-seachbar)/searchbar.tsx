"use client";

import React, { useState } from "react";

function Searchbar() {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input placeholder="입력하세요." onChange={onChangeSearch} />
      <button>검색</button>
    </div>
  );
}

export default Searchbar;
