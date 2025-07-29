import React from "react";
import { useRouter } from "next/router";

function Page() {
  const router = useRouter();
  const { q } = router.query;
  return <div>search {q}</div>;
}

export default Page;
