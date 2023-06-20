"use client";

import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import { toastSuccess, toastWarning } from "@/components/ui/Toasters";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { Issue, User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import React from "react";

interface Props {
  onClose: () => void;
  users: User[];
  issueId: string;
  issues: Issue[];
  setIssues: React.Dispatch<React.SetStateAction<Issue[]>>;
}

const AssigneDropdown = ({
  onClose,
  users,
  issueId,
  issues,
  setIssues,
}: Props) => {
  const baseUrl = getBaseUrl();

  const changeAssigne = async (assigneId: string, assigneImg: string) => {
    try {
      await axios.patch(`${baseUrl}/api/assignUser`, {
        id: issueId,
        assigneId: assigneId,
        assigneImg: assigneImg,
      });
      onClose();
      toastSuccess("User assigned successfully");

      const updatedIssues = issues.map((issue: Issue) => {
        if (issue.id === issueId) {
          return { ...issue, assigneImg: assigneImg };
        }
        return issue;
      });
      setIssues(updatedIssues);
    } catch (error) {
      toastWarning("Something went wrong", "Please try again");
    }
  };
  //

  return (
    <Dropdown
      onClose={onClose}
      className="mt-1 origin-top-left p-1 backdrop-blur-3xl h-auto border-opacity-20"
    >
      <Input variant="ghost" placeholder="Assign to..." className="px-3" />
      {users &&
        users.map((user: User) => (
          <button
            key={user.id}
            className="h-[30px] relative hover:bg-stone-700 hover:bg-opacity-30 rounded-md flex items-center gap-1 px-2 w-full"
            onClick={() => changeAssigne(user.id, user.image ?? "")}
          >
            <Image
              src={user?.image || ""}
              width={18}
              height={18}
              className="rounded-full h-5"
              alt="userImg"
            />
            <p className="text-white font-medium text-[13px] px-2 py-1 flex items-center">
              {user.name}
            </p>
          </button>
        ))}
    </Dropdown>
  );
};

export default AssigneDropdown;
