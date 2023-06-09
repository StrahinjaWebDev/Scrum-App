import { prisma } from "@/server/db";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await prisma?.user.findMany();
  return NextResponse.json(user);
}
