import { prisma } from "@/server/db";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = await prisma?.user.findFirst({
    where: {
      name: session?.user.name,
    },
  });
  return (
    <div className="w-[20em] h-[100vh] bg-black opacity-90 border-r-2 flex justify-center items-center">
      <div className="flex items-start w-[90%] min-h-[96%]">
        <button className="text-white text-sm">{user?.name}</button>
      </div>
    </div>
  );
}
