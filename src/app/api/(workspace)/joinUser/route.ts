import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const res = await request.json();
  const userId = res.userId;
  const workspaceId = res.workspaceId;
  try {
    {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          workspaceId: workspaceId,
        },
      });
      return NextResponse.json(user);
    }
  } catch (error) {
    return new Response(error);
  }
}
