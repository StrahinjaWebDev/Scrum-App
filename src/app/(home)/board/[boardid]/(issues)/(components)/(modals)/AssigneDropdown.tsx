"use client";

import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import { toastSuccess, toastWarning } from "@/components/ui/Toasters";
import { getBaseUrl } from "@/lib/getBaseUrl";
import type { User } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import React from "react";

interface Props {
  onClose: () => void;
  users: User[];
  issueId: string;
}

const AssigneDropdown = ({ onClose, users, issueId }: Props) => {
  const baseUrl = getBaseUrl();

  const changeAssigne = async (userId: string) => {
    try {
      await axios.patch(`${baseUrl}/api/assignUser`, {
        id: issueId,
        userId: userId,
      });
      onClose();
      toastSuccess("User assigned successfully");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toastWarning(error);
    }
  };

  return (
    <Dropdown
      onClose={onClose}
      className="bg-opacity-80 mt-1 origin-top-left w-[320px] px-3 py-2 backdrop-opacity-90 backdrop-blur-3xl h-auto"
    >
      <Input variant="ghost" placeholder="Assign to..." />
      {users &&
        users.map((user: User) => (
          <div
            key={user.id}
            className="w-[300px] h-[30px] relative hover:bg-gray-500 hover:bg-opacity-50 rounded-md flex items-center"
            onClick={() => changeAssigne(user.id)}
            onKeyPress={() => changeAssigne(user.id)}
            role="button"
            tabIndex={0}
          >
            <Image
              src={user?.image || ""}
              width={20}
              height={20}
              className="rounded-full h-5 ml-2"
              alt="userImg"
            />
            <p className="text-white font-medium text-[13px] pl-2 flex items-center">
              {user.name}
            </p>
          </div>
        ))}
    </Dropdown>
  );
};

export default AssigneDropdown;
