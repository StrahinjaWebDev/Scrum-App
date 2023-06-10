"use client";

import Dropdown from "@/components/ui/Dropdown";
import type { User } from "@prisma/client";
import React from "react";

interface Props {
  onClose: () => void;
  users: User[];
}

const AssigneDropdown = ({ onClose, users }: Props) => {
  return (
    <Dropdown onClose={onClose} className="bg-opacity-90 w-[320px] h-[100px]">
      {users &&
        users.map((user: User) => (
          <p key={user.id} className="text-red-500">
            {user.name}
          </p>
        ))}
      <p>aa</p>
    </Dropdown>
  );
};

export default AssigneDropdown;
