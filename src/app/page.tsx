import React from "react";
import Sidebar from "./(home)/sidebar";
import { getUser } from "@/getUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await getUser(session?.user.id ?? "");

  return (
    session && (
      <div className="flex w-full h-full">
        <Sidebar user={data} />
      </div>
    )
  );
}
