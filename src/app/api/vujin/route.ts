import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const board = await prisma.board.findFirst({
    where: {
      name: "Marjan",
    },
  });

  return NextResponse.json(board);
}
