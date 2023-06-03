import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  const workspaces = await prisma.workspace.findMany();
  return NextResponse.json(workspaces);
}
