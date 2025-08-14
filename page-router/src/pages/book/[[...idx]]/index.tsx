import { useRouter } from "next/router";
import React from "react";

function Page() {
  const router = useRouter();
  const { idx } = router.query;

  return (
    <div>
      book/idx ::: {idx},{idx?.length}
    </div>
  );
}

export default Page;
