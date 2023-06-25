import { prisma } from "@/server/db";
import { NextResponse } from "next/server";
import type { ApiCreateNewIssueRequest } from "./api-request";
import { apiCreateIssueValidator } from "./api-request";

export async function POST(request: Request) {
  const res = await request.json();
  const validatePayload: ApiCreateNewIssueRequest =
    apiCreateIssueValidator.parse(res);
  const { name, description, columnId, assigneImg } = validatePayload;

  try {
    const issue = await prisma.issue.create({
      data: {
        name: name,
        description: description,
        columnId: columnId,
        assigneImg: assigneImg,
      },
    });

    if (columnId) {
      return NextResponse.json(issue);
    }
  } catch (error) {
    const errorMessage = (error as Error).toString();
    return new Response(errorMessage, { status: 500 });
  }
}
