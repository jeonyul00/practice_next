import React from "react";

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return <div>search ::: {q}</div>;
}

export default Page;
