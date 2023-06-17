"use client";

import Button from "@/components/ui/Button";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import CreateBoardModal from "./modal/CreateBoardModal";
import { useAppSelector } from "@/redux/store";

const CreateBoard = () => {
  const [createBoardModal, setCreateBoardModal] = useState(false);

  const userData = useAppSelector((state) => state.userData);

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
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreateBoard;
