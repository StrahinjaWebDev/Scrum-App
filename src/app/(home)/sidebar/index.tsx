"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { User } from "@/types";
import Loader from "@/components/ui/Loader";
import CreateBoard from "./(components)/CreateBoard";
import { useAppSelector } from "@/redux/store";
import { useGetBoardsQuery } from "@/redux/api/boards-api";
import { useDispatch } from "react-redux";
import { setBoards } from "@/redux/slices/board-slice";
import { useGetUserDataQuery } from "@/redux/api/user-api";
import { setUserData } from "@/redux/slices/userData-slice";
import Boards from "./(components)/Boards";
import SidebarHeader from "./(components)/SidebarHeader";

interface Props {
  user: User | null;
}

const Sidebar = ({ user }: Props) => {
  const { data: userFetch } = useGetUserDataQuery(user?.id ?? "");
  const userData = useAppSelector((state) => state.userData);

  const { data } = useGetBoardsQuery(userData?.Workspace?.id ?? "");

  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userFetch && data) {
      dispatch(setUserData(userFetch));
      dispatch(setBoards(data));
    }
  }, [userFetch, dispatch, data]);

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
      <SidebarHeader user={user} />
      <CreateBoard />
      <Boards />
    </div>
  ) : (
    <div className="w-[220px] h-[100vh] flex justify-center items-center">
      <Loader variant="primary" />
    </div>
  );
};

export default Sidebar;
