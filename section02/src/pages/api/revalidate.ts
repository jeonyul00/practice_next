import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await res.revalidate("/"); // 어떤 경로 페이지를 재생성할거냐
    return res.json({ revalidate: true });
  } catch (e) {
    console.log(e);
    res.status(500).send("revalidate failed ");
  }
}

// 이제 여기 호출하면? -> / 페이지를 재생성 하겠죠?
