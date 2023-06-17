import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const { id, assigneId, assigneImg } = await request.json();

  try {
    const updatedIssue = await prisma.issue.update({
      where: { id: id },
      data: { assigneId: assigneId, assigneImg: assigneImg },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    const errorMessage = (error as Error).toString();
    console.error(error);
    return new Response(errorMessage, { status: 500 });
  }
}
