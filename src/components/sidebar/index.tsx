"use client";
import React, { useEffect } from "react";
import type { User } from "@prisma/client";
import Button from "../ui/Button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
  user: User | null;
}

const Sidebar = ({ user }: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session === null && status === "unauthenticated") {
      router.push("http://localhost:3000/sign-in");
    }
  }, [session, status, router]);

  return (
    <div className="w-[300px] h-[100vh] bg-slate-400 bg-opacity-5 border-r flex border-gray-500 border-opacity-20 justify-center items-center">
      <div className="flex items-start w-[90%] min-h-[96%] justify-around">
        <button
          className="text-white text-sm"
          // onClick={() => setUserOptionsModal(true)}
        >
          {user?.name}
        </button>
        <Button variant="danger" size="sm" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
