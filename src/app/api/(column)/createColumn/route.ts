import { NextResponse } from "next/server";
import type { ApiCreateNewColumnRequest } from "./api-request";
import { apiCreateColumnValidator } from "./api-request";
import { prisma } from "@/server/db";

export async function POST(request: Request) {
  const res = await request.json();
  const validatePayload: ApiCreateNewColumnRequest =
    apiCreateColumnValidator.parse(res);
  const { name, boardId } = validatePayload;

  try {
    const column = await prisma.column.create({
      data: {
        name: name,
        boardId: boardId,
      },
    });

    return NextResponse.json(column);
  } catch (error) {
    const errorMessage = (error as Error).toString();
    return new Response(errorMessage, { status: 500 });
  }
}
