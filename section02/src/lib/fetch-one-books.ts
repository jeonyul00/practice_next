import { BookData } from "@/types";

export default async function fetchOneBook(
  id: number
): Promise<BookData | undefined> {
  const url = `http://localhost:12345/book/${id}`;
  try {
    const response = await fetch(url);
    if (!response) throw new Error();
    return await response.json();
  } catch (e) {
    console.log(e);
    return undefined;
  }
}
