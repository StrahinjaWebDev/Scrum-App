"use client";

import React, { useState } from "react";
import Issue from "../board/[boardid]/(issues)/Issue";
import type { Column } from "@prisma/client";
import CreateIssueModal from "./(components)/modals/CreateIssueModal";

interface Props {
  column: Column;
}

const Columns = ({ column }: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <div
      key={column.id}
      className="w-[20em] h-full bg-inherit flex gap-3 flex-col"
    >
      <div className="flex justify-between">
        <p className="text-white font-semibold">{column.name}</p>
        <button
          className="w-[27px] h-[27px] pb-[0.35rem] flex items-center justify-center  text-white text-bold text-2xl text-opacity-50 hover:text-opacity-90 hover:bg-secondary hover:bg-opacity-50 rounded-md"
          onClick={() => setModal(true)}
        >
          +
        </button>
        {modal && (
          <CreateIssueModal
            onClose={() => setModal(false)}
            columnId={column.id}
          />
        )}
      </div>

      <Issue columnId={column.id} />
    </div>
  );
};

export default Columns;
