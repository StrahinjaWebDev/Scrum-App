import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const req = await request.json();
  const userId = req.userId;

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      workspaceId: null,
    },
  });
  return NextResponse.json(user);
}
