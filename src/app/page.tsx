import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Sidebar from "@/app/(home)/sidebar";
import { getUser } from "@/getUser";
import Header from "./(home)/Header/Header";
import Team from "./(home)/team/Team";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const data = await getUser(session?.user.id ?? "");

  return (
    <div className="flex w-full h-full">
      <Sidebar user={data} />
      <div className="flex flex-col grow">
        <Header />
        <Team />
      </div>
    </div>
  );
}
