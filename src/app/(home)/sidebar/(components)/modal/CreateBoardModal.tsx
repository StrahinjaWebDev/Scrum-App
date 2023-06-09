"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/modal";
import type { ApiCreateNewBoardRequest } from "@/app/api/(board)/createBoard/api-request";
import { apiCreateBoardValidator } from "@/app/api/(board)/createBoard/api-request";
import axios from "axios";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { toastSuccess, toastWarning } from "@/components/ui/Toasters";
import { z } from "zod";
import type { Board } from "@prisma/client";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setBoards } from "@/redux/slices/board-slice";

interface Props {
  onClose: () => void;
  workspaceId: string;
}

const CreateBoardModal = ({ onClose }: Props) => {
  const [name, setName] = useState("");

  const userData = useAppSelector((state) => state.userData);
  const boards = useAppSelector((state) => state.boards) || [];

  const baseUrl = getBaseUrl();
  const dispatch = useDispatch();

  const createBoard = async () => {
    try {
      const newBoard: ApiCreateNewBoardRequest = {
        name: name,
        workspaceId: userData.Workspace?.id ?? "",
      };
      await apiCreateBoardValidator.parseAsync(newBoard);
      const response = await axios.post(`${baseUrl}/api/createBoard`, newBoard);
      const createdBoard: Board = {
        id: response.data.id,
        name: newBoard.name,
        workspaceId: newBoard.workspaceId,
      };
      onClose();
      toastSuccess("Success", "Board created successfully");
      dispatch(setBoards([...boards, createdBoard]));
    } catch (err) {
      if (err instanceof z.ZodError) {
        toastWarning("Failed", err.issues[0].message);
      }
    }
  };

  return (
    <Modal
      className="w-[30em] py-8 px-4 bg-dark-4 border-stone-300 border-opacity-10 bg-opacity-90"
      onClose={onClose}
      hasOverlay
    >
      <div className="flex flex-col items-center gap-5">
        <p className="text-center text-2xl font-semibold text-primary text-opacity-90">
          Board
        </p>
        <div className="flex items-center gap-5 justify-center w-full">
          <p className="text-lg font-semibold text-primary text-opacity-80">
            Name:
          </p>
          <Input
            variant="primary"
            className="bg-secondary bg-opacity-40 w-[17em]"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-around items-center w-full">
          <Button className="w-24 border" variant="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button className="w-24" variant="primary" onClick={createBoard}>
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateBoardModal;
