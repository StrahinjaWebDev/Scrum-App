import { prisma } from "@/server/db";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  id: z.string().optional(),
});

export async function GET(request: Request) {
  const requestBody: { id?: string } = {};
  const { id } = schema.parse(requestBody);

  const user = await prisma?.user.findFirst({
    where: {
      id: id,
    },
    select: {
      name: true,
      id: true,
      image: true,
      Workspace: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  return NextResponse.json(user);
}
