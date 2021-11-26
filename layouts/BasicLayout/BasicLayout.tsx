import React, { ReactNode } from "react";
import FooterCustom from "../../components/FooterCustom";
import HeaderCustom from "../../components/HeaderCustom";

interface LayoutChildren {
  children: ReactNode;
}

export default function BasicLayout({ children }: LayoutChildren) {
  return (
    <div className="container-fluid basic-layout__global">
      <HeaderCustom />
      <h1>basic layout</h1> {children}
      <FooterCustom />
    </div>
  );
}
