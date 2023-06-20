import React from "react";
import Header from "../Header/Header";
import Sidebar from "../sidebar";
import { getUser } from "@/getUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Loader from "@/components/ui/Loader";

export default async function BoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const data = await getUser(session?.user.id ?? "");
  return (
    session?.user.id && (
      <>
        <aside className="flex relative w-full">
          <Sidebar user={data} />
          <div className="flex flex-col grow">
            <Header />
            {children}
          </div>
        </aside>
      </>
    )
  );
}
