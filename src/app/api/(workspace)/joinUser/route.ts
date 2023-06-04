import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function PUT(request: Request) {
  const res = await request.json();
  const userId = res.userId;
  const workspaceId = res.workspaceId;
  try {
    {
      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          workspaceId: workspaceId,
        },
      });
      return NextResponse.json(updatedUser, { status: 200 });
    }
  } catch (error) {
    const errorMessage = (error as Error).toString();
    return new Response(errorMessage, { status: 500 });
  }
}
