import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();
  const userId = res.userId;
  const name = res.name;
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
    return new Response(error);
  }
}
