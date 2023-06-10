import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const workspaceId = searchParams.get("workspaceId");

  try {
    const users = await prisma.user.findMany({
      where: {
        workspaceId: workspaceId,
      },
      select: {
        name: true,
        email: true,
        id: true,
        image: true,
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    NextResponse.error();
  }
}
