import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const boards = await prisma.board.findMany({
    where: {
      workspaceId: id as string,
    },
    select: {
      name: true,
      id: true,
    },
  });
  return NextResponse.json(boards);
}
