import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const columnId = searchParams.get("columnId");
  const issues = await prisma.issue.findMany({
    where: {
      columnId: columnId as string,
    },
    select: {
      name: true,
      description: true,
      id: true,
      userId: true,
      columnId: true,
    },
  });
  return NextResponse.json(issues);
}
