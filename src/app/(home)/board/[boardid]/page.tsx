import { getColumns } from "@/getColumns";
import React from "react";
import CreateColumn from "./(components)/CreateColumn";
import type { Column } from "@prisma/client";
import Columns from "../../column/Columns";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { getUser } from "@/getUser";

interface Props {
  params: {
    boardid: string;
  };
}

export default async function Board({ params: { boardid } }: Props) {
  const session = await getServerSession(authOptions);
  const data = await getUser(session?.user.id ?? "");
  const columns = await getColumns(boardid);
  const workspaceId = data.Workspace.id;

  return (
    <div>
      <CreateColumn boardId={boardid} columns={columns} />
      <div className="w-[90%] h-[80vh] mt-8 ml-8 flex gap-6">
        {columns.map((column: Column) => (
          <Columns column={column} key={column.id} workspaceId={workspaceId} />
        ))}
      </div>
    </div>
  );
}
