"use client";

import Button from "@/components/ui/Button";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import CreateBoardModal from "./modal/CreateBoardModal";
import { setBoards } from "@/redux/slices/board-slice";
import type { Board } from "@prisma/client";
import type { User } from "@/types";

interface Props {
  boards: Board[] | [];
  userData: User | null;
}

const CreateBoard = ({ boards, userData }: Props) => {
  const [createBoardModal, setCreateBoardModal] = useState(false);

  const addBoard = (newBoard: Board) => {
    setBoards([...boards, newBoard]);
  };

  return (
    <div className="flex justify-center">
      <Button
        variant="primary"
        size="sm"
        className="bg-opacity-30 hover:bg-dark-3"
        onClick={() => setCreateBoardModal(true)}
      >
        Create board
      </Button>
      <AnimatePresence>
        {createBoardModal && (
          <CreateBoardModal
            onClose={() => setCreateBoardModal(false)}
            workspaceId={userData?.Workspace?.id ?? ""}
            addBoard={addBoard}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateBoard;
