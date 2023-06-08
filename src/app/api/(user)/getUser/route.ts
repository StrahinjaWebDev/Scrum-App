import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const user = await prisma?.user.findFirst({
    where: {
      id: id?.toString(),
    },
    select: {
      name: true,
      id: true,
      image: true,
      Workspace: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  return NextResponse.json(user);
}
