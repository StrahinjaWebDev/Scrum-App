import React from "react";
import Header from "../Header/Header";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="relative w-full">
        <Header />
        {children}
      </aside>
    </>
  );
}
