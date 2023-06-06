import { prisma } from "@/server/db";
import { NextResponse } from "next/server";
import type { ApiCreateNewWorkspaceRequest } from "./api-request";
import { apiCreateWorkspaceValidator } from "./api-request";

export async function POST(request: Request) {
  const res = await request.json();
  const validatePayload: ApiCreateNewWorkspaceRequest =
    apiCreateWorkspaceValidator.parse(res);
  const { name, userId } = validatePayload;

  try {
    const workspace = await prisma.workspace.create({
      data: {
        name: name,
      },
    });

    if (workspace.id) {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          workspaceId: workspace.id,
        },
      });
      return NextResponse.json(user);
    }
  } catch (error) {
    const errorMessage = (error as Error).toString();
    return new Response(errorMessage, { status: 500 });
  }
}
