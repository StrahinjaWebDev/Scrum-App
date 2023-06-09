import { getColumns } from "@/getColumns";
import React from "react";
import CreateColumn from "./(components)/CreateColumn";
import type { Column } from "@prisma/client";

interface Props {
  params: {
    boardid: string;
  };
}

export default async function Board({ params: { boardid } }: Props) {
  const columns = await getColumns(boardid);
  return (
    <div>
      <CreateColumn boardId={boardid} columns={columns} />
      <div className="w-[90%] h-[80vh] mt-8 ml-8 flex gap-6">
        {columns.map((column: Column) => (
          <div key={column.id} className="w-[20em] h-full bg-white flex gap-3">
            <p>{column.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
