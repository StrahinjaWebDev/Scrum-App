"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import CreateColumnModal from "./modals/CreateColumnModal";
import type { Column } from "@prisma/client";
import { AnimatePresence } from "framer-motion";

interface Props {
  boardId: string;
  columns: Column[];
}

const CreateColumn = ({ boardId, columns }: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="mt-6 ml-8"
        onClick={() => setModal(true)}
      >
        Create Column
      </Button>
      {modal && (
        <AnimatePresence>
          <CreateColumnModal
            boardId={boardId}
            onClose={() => setModal(false)}
            columns={columns}
          />
        </AnimatePresence>
      )}
    </>
  );
};

export default CreateColumn;
