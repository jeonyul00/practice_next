import HomeLayout from "@/modules/home/ui/layouts/home-layout";
import React from "react";
import { JSX } from "react/jsx-runtime";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props): JSX.Element {
  return <HomeLayout>{children}</HomeLayout>;
}

export default Layout;
