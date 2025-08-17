import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Suspense : 사전 렌더링 시 배제됨 */}
      <Suspense fallback={<div>loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
