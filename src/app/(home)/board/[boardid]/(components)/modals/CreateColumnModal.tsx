import { apiCreateColumnValidator } from "@/app/api/(column)/createColumn/api-request";
import type { ApiCreateNewColumnRequest } from "@/app/api/(column)/createColumn/api-request";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { toastSuccess, toastWarning } from "@/components/ui/Toasters";
import Modal from "@/components/ui/modal";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Column } from "@prisma/client";
import axios from "axios";
import React, { useState } from "react";
import { z } from "zod";

interface Props {
  onClose: () => void;
  boardId: string;
  columns: Column[];
}

const CreateColumnModal = ({ onClose, boardId, columns }: Props) => {
  const [name, setName] = useState("");
  const [newColumns, setNewColumns] = useState(columns);

  const baseUrl = getBaseUrl();

  const createColumn = async () => {
    try {
      const newColumn: ApiCreateNewColumnRequest = {
        name: name,
        boardId: boardId,
      };
      await apiCreateColumnValidator.parseAsync(newColumn);
      const response = await axios.post(
        `${baseUrl}/api/createColumn`,
        newColumn
      );
      const createdColumn: Column = {
        id: response.data.id,
        name: newColumn.name,
        boardId: newColumn.boardId,
      };
      setNewColumns([...newColumns, createdColumn]);
      onClose();
      toastSuccess("Success", "Column created successfully");
    } catch (err) {
      if (err instanceof z.ZodError) {
        toastWarning("Failed", err.issues[0].message);
      }
    }
  };

  return (
    <>
      <Modal
        className="w-[30em] py-8 px-4 bg-dark-4 border-stone-300 border-opacity-10 bg-opacity-90"
        onClose={onClose}
        hasOverlay
      >
        <div className="flex flex-col items-center gap-5">
          <p className="text-center text-2xl font-semibold text-primary text-opacity-90">
            Column
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
            <Button className="w-24" variant="primary" onClick={createColumn}>
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreateColumnModal;
