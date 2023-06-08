import React from "react";

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside className="relative w-full">{children}</aside>
    </>
  );
}
