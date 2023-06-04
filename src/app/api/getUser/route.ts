import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id = (request.body as { id?: string })?.id;
  const user = await prisma?.user.findFirst({
    where: {
      id: id,
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
