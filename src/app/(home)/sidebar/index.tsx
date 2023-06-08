"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../../components/ui/Button";
import axios from "axios";
import UserDropdown from "../dropdowns/UserDropdown";
import type { User } from "@/types";
import Tooltip from "@/components/ui/Tooltip";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { getBoards } from "@/getBoards";
import { Board } from "@prisma/client";
import Link from "next/link";

interface Props {
  user: User | null;
}

const Sidebar = ({ user }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [boards, setBoards] = useState([]);

  const { data: session, status } = useSession();

  const router = useRouter();
  const baseUrl = getBaseUrl();

  useEffect(() => {
    const fetchBoards = async () => {
      if (userData?.Workspace.id) {
        const boards = await getBoards(userData?.Workspace.id);
        setBoards(boards);
      }
    };
    fetchBoards();
  }, [userData?.Workspace.id]);

  useEffect(() => {
    const getUser = async () => {
      const { data: user } = await axios.get(`${baseUrl}/api/getUser`);

      setUserData(user);
    };

    getUser();
  }, [baseUrl]);

  useEffect(() => {
    if (session === null && status === "unauthenticated") {
      router.push("/sign-in");
    }
  }, [session, status, router]);

  useEffect(() => {
    if (userData?.Workspace === null) {
      router.push("/join");
    }
  }, [userData, router]);

  console.log(boards);

  return (
    <div className="w-[220px] h-[100vh] bg-slate-200 bg-opacity-5 border-r flex flex-col border-gray-500 border-opacity-20 items-center shrink-0">
      <div className="h-20 w-full">
        <div className="flex items-center py-4 w-full justify-around">
          <div>
            <Tooltip text={userData?.Workspace?.name ?? ""}>
              <p className="text-stone-300 text-sm whitespace-nowrap overflow-hidden text-ellipsis font-bold w-[140px]">
                {userData?.Workspace?.name}
              </p>
            </Tooltip>
          </div>
          <div className="relative">
            <Button size="sm" variant="ghost">
              <Image
                src={user?.image || ""}
                title={user?.name || ""}
                width={20}
                height={20}
                className="rounded-full"
                alt="userImg"
                onClick={() => setDropdown(true)}
              />
            </Button>
            {dropdown && session?.user.id && (
              <UserDropdown
                onClose={() => setDropdown(false)}
                userId={session?.user.id}
              />
            )}
          </div>
        </div>
        <div className="w-full flex flex-col">
          {boards.map((board: Board) => (
            <div key={board.id}>
              <Link href={`/board/${board.id}`}>{board.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
