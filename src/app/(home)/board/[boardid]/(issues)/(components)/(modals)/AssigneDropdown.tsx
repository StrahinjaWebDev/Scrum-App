"use client";

import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import type { User } from "@prisma/client";
import React from "react";

interface Props {
  onClose: () => void;
  users: User[];
}

const AssigneDropdown = ({ onClose, users }: Props) => {
  return (
    <Dropdown
      onClose={onClose}
      className="bg-opacity-90 w-[320px] h-[100px] px-6 py-2"
    >
      <Input variant="ghost" placeholder="Search" />
      {users &&
        users.map((user: User) => (
          <p key={user.id} className="text-red-500">
            {user.name}
          </p>
        ))}
    </Dropdown>
  );
};

export default AssigneDropdown;
