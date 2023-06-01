import { prisma } from "@/server/db";
import React, { useState } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = await prisma?.user.findFirst({
    where: {
      name: session?.user.name,
    },
  });
  //? Komponente uvek stavljaj van app dir-a - u src folder.
  //? Imaj folder modals, dropdowns, itd. Nevezano za ovaj ui folder koji sam napravio
  return (
    <div className="w-[20em] h-[100vh] bg-slate-400 bg-opacity-5 border-r flex border-gray-500 border-opacity-20 justify-center items-center">
      <div className="flex items-start w-[90%] min-h-[96%]">
        <button
          className="text-white text-sm"
          // onClick={() => setUserOptionsModal(true)}
        >
          {user?.name}
        </button>
      </div>
    </div>
  );
}
