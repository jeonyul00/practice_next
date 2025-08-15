import { NextApiRequest, NextApiResponse } from "next";

export default function getCurrentTime(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const date = new Date();
  res.json({ time: date.toLocaleString() });
}
