import type { ApiCreateNewIssueRequest } from "@/app/api/(issue)/createIssue/api-request";
import { apiCreateIssueValidator } from "@/app/api/(issue)/createIssue/api-request";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { toastSuccess, toastWarning } from "@/components/ui/Toasters";
import Modal from "@/components/ui/modal";
import { getIssues } from "@/getIssues";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Issue } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { z } from "zod";

interface Props {
  onClose: () => void;
  columnId: string;
}

const CreateIssueModal = ({ onClose, columnId }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [issues, setIssues] = useState<Issue[] | []>([]);

  const baseUrl = getBaseUrl();

  const createIssue = async () => {
    try {
      const newIssue: ApiCreateNewIssueRequest = {
        name: name,
        columnId: columnId,
        description: description,
      };
      await apiCreateIssueValidator.parseAsync(newIssue);
      const response = await axios.post(`${baseUrl}/api/createIssue`, newIssue);
      const createdIssue: Issue = {
        id: response.data.id,
        name: newIssue.name,
        description: newIssue.description,
        columnId: newIssue.columnId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      onClose();
      toastSuccess("Success", "Column created successfully");
      setIssues([...issues, createdIssue]);
    } catch (err) {
      if (err instanceof z.ZodError) {
        toastWarning("Failed", err.issues[0].message);
      }
    }
  };

  useEffect(() => {
    const fetchIssues = async () => {
      if (columnId) {
        const issues = await getIssues(columnId);
        setIssues(issues);
      }
    };
    fetchIssues();
  }, [columnId]);

  return (
    <Modal
      onClose={onClose}
      className="bg-dark-2 bg-opacity-90 border-gray-700 border-opacity-10 w-[750px] h-[15em] pl-6"
    >
      <Modal.Header onClose={onClose} className="text-white text-sm">
        New Issue
      </Modal.Header>
      <Input
        placeholder="Issue title"
        variant="ghost"
        className="w-full placeholder:text-xl placeholder:font-semibold pt-3"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Add description..."
        variant="ghost"
        className="w-full placeholder:text-[1.15em] h-[5em]"
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex justify-end mr-3">
        <Button
          variant="danger"
          className="w-[7em] h-[2.2em] text-sm mt-12"
          onClick={createIssue}
        >
          Create issue
        </Button>
      </div>
    </Modal>
  );
};

export default CreateIssueModal;
