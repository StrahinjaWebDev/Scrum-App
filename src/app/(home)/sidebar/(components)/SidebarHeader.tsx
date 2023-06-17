"use client";

import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import Image from "next/image";
import React, { useState } from "react";
import UserDropdown from "./dropdowns/UserDropdown";
import type { User } from "@/types";
import { useSession } from "next-auth/react";
import { useAppSelector } from "@/redux/store";

interface Props {
  user: User | null;
}

const SidebarHeader = ({ user }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const userData = useAppSelector((state) => state.userData);

  const { data: session } = useSession();

  return (
    <div className="flex items-center py-4 w-full justify-around z-50">
      <div>
        <Tooltip text={userData?.Workspace?.name ?? ""} className="z-99">
          <p className="text-stone-300 text-sm whitespace-nowrap overflow-hidden text-ellipsis font-bold">
            {userData?.Workspace?.name}
          </p>
        </Tooltip>
      </div>
      <div className="relative z-0">
        <Tooltip text={user?.name || ""}>
          <Button
            size="sm"
            variant="ghost"
            className="hover:bg-slate-500 hover:bg-opacity-20"
          >
            <Image
              src={user?.image || ""}
              width={20}
              height={20}
              className="rounded-full"
              alt="userImg"
              onClick={() => setDropdown(true)}
            />
          </Button>
        </Tooltip>
        {dropdown && session?.user && (
          <UserDropdown onClose={() => setDropdown(false)} />
        )}
      </div>
    </div>
  );
};

export default SidebarHeader;
