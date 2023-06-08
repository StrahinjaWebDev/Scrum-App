import React from "react";
import Header from "../Header/Header";
import Sidebar from "../sidebar";
import { getUser } from "@/getUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const data = await getUser(session?.user.id ?? "");
  return (
    <>
      <aside className="flex relative w-full">
        <Sidebar user={data} />
        <div className="flex flex-col grow">
          <Header />
          {children}
        </div>
      </aside>
    </>
  );
}
