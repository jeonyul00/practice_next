import React from "react";

async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const q = await searchParams;
  return <div>search</div>;
}

export default Page;
