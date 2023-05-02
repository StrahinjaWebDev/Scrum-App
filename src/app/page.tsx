import { prisma } from "@/server/db";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = await prisma?.user.findFirst({
    where: {
      id: session?.user.id,
      name: session?.user.name,
    },
  });

  console.log(user?.name);
  return (
    <div>
      <h1>Homepage</h1>
      <p>Hello: {user?.name}</p>
    </div>
  );
}
