"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../../components/ui/Button";
import axios from "axios";
import UserDropdown from "./(components)/dropdowns/UserDropdown";
import type { User } from "@/types";
import Tooltip from "@/components/ui/Tooltip";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { getBoards } from "@/getBoards";
import type { Board } from "@prisma/client";
import Link from "next/link";
import classNames from "classnames";
import Loader from "@/components/ui/Loader";
import CreateBoard from "./(components)/modal/CreateBoard";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "@/redux/store";

interface Props {
  user: User | null;
}

const Sidebar = ({ user }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [boards, setBoards] = useState<Board[]>([]);
  const [createBoardModal, setCreateBoardModal] = useState(false);

  const reduxTest = useAppSelector((state) => state.authReducer.value.username);

  console.log(reduxTest);

  const { data: session, status } = useSession();

  const pathname = usePathname();
  const router = useRouter();
  const baseUrl = getBaseUrl();

  const addBoard = (newBoard: Board) => {
    setBoards((prevBoards: Board[]) => [...prevBoards, newBoard]);
  };

  useEffect(() => {
    const fetchBoards = async () => {
      if (userData?.Workspace.id) {
        const boards = await getBoards(userData?.Workspace.id);
        setBoards(boards);
      }
    };
    fetchBoards();
  }, [userData?.Workspace?.id]);

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

  return userData?.Workspace?.id ? (
    <div className="w-[220px] h-[100vh] bg-slate-200 bg-opacity-5 border-r flex flex-col border-gray-500 border-opacity-20 items-center shrink-0">
      <div className="h-20 w-full">
        <div className="flex items-center py-4 w-full justify-around">
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
            {dropdown && session?.user.id && (
              <UserDropdown
                onClose={() => setDropdown(false)}
                userId={session?.user.id}
              />
            )}
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-1">
          <>
            <Button
              variant="primary"
              size="sm"
              className="bg-opacity-30 hover:bg-dark-3 mr-[80px]"
              onClick={() => setCreateBoardModal(true)}
            >
              Create board
            </Button>
            <AnimatePresence>
              {createBoardModal && (
                <CreateBoard
                  onClose={() => setCreateBoardModal(false)}
                  workspaceId={userData?.Workspace?.id}
                  addBoard={addBoard}
                />
              )}
            </AnimatePresence>
            <p className="flex w-full pl-4 text-[13px] text-secondary hover:bg-dark-3 mt-2">
              Your boards
            </p>
            {boards.map((board: Board) => (
              <div key={board.id}>
                <Link
                  className={classNames(
                    "text-stone-300 rounded-sm flex pl-4 w-[200px] font-medium text-[14px] hover:bg-dark-3 h-6",
                    {
                      "bg-dark-3": `/board/${board.id}` === pathname,
                      "bg-none": `/board/${board.id}` !== pathname,
                    }
                  )}
                  key={board.id}
                  href={`/board/${board.id}`}
                >
                  {board.name}
                </Link>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen w-screen flex justify-center items-center">
      <Loader variant="primary" />
    </div>
  );
};

export default Sidebar;
