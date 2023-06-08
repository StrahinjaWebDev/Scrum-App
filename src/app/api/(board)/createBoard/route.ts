import { NextResponse } from "next/server";
import type { ApiCreateNewBoardRequest } from "./api-request";
import { apiCreateBoardValidator } from "./api-request";
import { prisma } from "@/server/db";

export async function POST(request: Request) {
  const res = await request.json(); // { name: "board name", workspaceId: "workspace id" }
  const validatePayload: ApiCreateNewBoardRequest =
    apiCreateBoardValidator.parse(res);
  const { name, workspaceId } = validatePayload;

  try {
    const board = await prisma.board.create({
      data: {
        name: name,
        workspaceId: workspaceId,
      },
    });

    if (board.id) {
      return NextResponse.json(board);
    }
  } catch (error) {
    const errorMessage = (error as Error).toString();
    return new Response(errorMessage, { status: 500 });
  }
}
