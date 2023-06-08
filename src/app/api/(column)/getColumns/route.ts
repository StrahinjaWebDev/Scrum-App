import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const columns = await prisma.column.findMany({
    where: {
      boardId: id as string,
    },
    select: {
      name: true,
      id: true,
    },
  });
  return NextResponse.json(columns);
}
