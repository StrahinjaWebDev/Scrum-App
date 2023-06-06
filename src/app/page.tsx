import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Sidebar from "@/app/(home)/sidebar";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loader from "@/components/ui/Loader";
import { getUser } from "@/getUser";
import Header from "./(home)/Header/Header";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const data = await getUser(session?.user.id ?? "");

  return (
    <div className="flex w-full h-full">
      <Sidebar user={data} />
      <Header />
    </div>
  );
}
