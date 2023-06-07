import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log("ID JE", id)
  const boards = await prisma.workspace.findMany({
    where: {
      id: id as string,
    },
    select: {
      name: true,
      id: true,
      boards: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  return NextResponse.json(boards);
}
