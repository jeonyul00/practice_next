import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { JSX } from "react/jsx-runtime";
import { HomeNavbar } from "../coponents/home-navbar";
import HomeSidebar from "../coponents/home-sidebar";

type Props = {
  children: React.ReactNode;
};

function HomeLayout({ children }: Props): JSX.Element {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default HomeLayout;
