import React from "react";
import Sidebar from "./(home)/sidebar";
import { getUser } from "@/getUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { boardsApi } from "@/redux/api/boards-api";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await getUser(session?.user.id ?? "");

  return (
    <div className="flex w-full h-full">
      <Sidebar user={data} />
    </div>
  );
}
