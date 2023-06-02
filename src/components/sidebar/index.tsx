"use client";
import React, { useEffect, useState } from "react";
import type { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UserInformation from "../ui/modal/mainPage/UserInformation";

interface Props {
  user: User | null;
}

const Sidebar = ({ user }: Props) => {
  const [userInformationsModal, setUserInformationsModal] = useState(false);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null && status === "unauthenticated") {
      router.push("http://localhost:3000/sign-in");
    }
  }, [session, status, router]);

  return (
    <div className="w-[13.5em] h-[100vh] bg-slate-400 bg-opacity-5 border-r flex border-gray-500 border-opacity-20 justify-center items-center">
      <div className="flex items-start w-full min-h-[96%] justify-around ">
        <button className="text-white text-sm">{user?.name}</button>
        <Image
          src={user?.image || ""}
          width={20}
          height={20}
          className="rounded-full"
          alt=""
          onClick={() => setUserInformationsModal(true)}
        />
        {userInformationsModal && (
          <UserInformation
            setUserInformationsModal={setUserInformationsModal}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
